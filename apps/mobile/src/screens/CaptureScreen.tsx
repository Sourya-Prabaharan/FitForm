import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as DocumentPicker from "expo-document-picker";
import { useEffect, useRef, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Alert, Pressable, Text, View } from "react-native";
import { Camera, useCameraDevice, useCameraPermission, useMicrophonePermission } from "react-native-vision-camera";
import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { AppStackParamList } from "@/navigation/types";
import { api } from "@/services/api";

type Props = NativeStackScreenProps<AppStackParamList, "Capture">;

export function CaptureScreen({ navigation, route }: Props) {
  const { exercise } = route.params;
  const cameraPermission = useCameraPermission();
  const microphonePermission = useMicrophonePermission();
  const device = useCameraDevice("back");
  const camera = useRef<Camera>(null);
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const focused = useIsFocused();
  useEffect(() => {
    if (!isRecording) return;
    const timer = setTimeout(() => void camera.current?.stopRecording().catch(() => setIsRecording(false)), 120000);
    return () => clearTimeout(timer);
  }, [isRecording]);

  async function upload(uri: string, name = "workout.mp4", mimeType = "video/mp4") {
    setLoading(true);
    try {
      const analysis = await api.uploadVideo({ exercise, uri, fileName: name, mimeType });
      navigation.replace("Processing", { analysisId: analysis.id });
    } catch (error) {
      Alert.alert("Upload failed", error instanceof Error ? error.message : "Please try another video.");
    } finally {
      setLoading(false);
    }
  }

  async function pickVideo() {
    try {
    const result = await DocumentPicker.getDocumentAsync({ type: "video/*", copyToCacheDirectory: true });
    if (!result.canceled) {
      const asset = result.assets[0];
      if (asset.size && asset.size > 250 * 1024 * 1024) {
        Alert.alert("Video is too large", "Choose a clip under 250 MB and two minutes.");
        return;
      }
      await upload(asset.uri, asset.name, asset.mimeType ?? "video/mp4");
    }
    } catch {
      Alert.alert("Unable to open video", "Please select a locally available video and try again.");
    }
  }

  async function requestPermissions() {
    await cameraPermission.requestPermission();
    await microphonePermission.requestPermission();
  }

  async function toggleRecording() {
    if (!camera.current || loading) return;
    if (isRecording) {
      await camera.current.stopRecording();
      return;
    }
    setIsRecording(true);
    camera.current.startRecording({
      fileType: "mp4",
      onRecordingFinished: (video) => {
        setIsRecording(false);
        void upload(`file://${video.path}`, "fitform-recording.mp4", "video/mp4");
      },
      onRecordingError: (error) => {
        setIsRecording(false);
        Alert.alert("Recording failed", error.message);
      }
    });
  }

  const ready = cameraPermission.hasPermission && microphonePermission.hasPermission && device;

  return (
    <Screen scroll={false} className="flex-1 pt-2">
      <View className="mb-4 flex-row items-center justify-between">
        <Pressable onPress={() => navigation.goBack()} className="h-11 w-11 items-center justify-center rounded-[8px] bg-panel2">
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
        <Text className="text-lg font-black capitalize text-white">{exercise} analysis</Text>
        <View className="h-11 w-11" />
      </View>
      <View className="flex-1 overflow-hidden rounded-[8px] border border-[#1D332B] bg-panel2">
        {ready ? (
          <Camera ref={camera} style={{ flex: 1 }} device={device} isActive={focused && !loading} video audio />
        ) : (
          <View className="flex-1 items-center justify-center p-8">
            <Ionicons name="videocam" size={48} color="#8CFFCB" />
            <Text className="mt-4 text-center text-xl font-black text-white">Camera access needed</Text>
            <Text className="mt-2 text-center text-muted">Enable camera and microphone access to record directly in FitForm.</Text>
            <View className="mt-6 w-full">
              <Button title="Enable camera" onPress={requestPermissions} />
            </View>
          </View>
        )}
      </View>
      <View className="mt-4 gap-3">
        <Button title="Upload video" loading={loading} disabled={isRecording} icon={<Ionicons name="cloud-upload" size={20} color="#07100D" />} onPress={pickVideo} />
        <Button
          title={isRecording ? "Stop recording" : "Record clip"}
          variant="secondary"
          disabled={!ready || loading}
          onPress={toggleRecording}
          loading={isRecording && loading}
        />
      </View>
    </Screen>
  );
}
