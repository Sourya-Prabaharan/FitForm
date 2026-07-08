from __future__ import annotations

import math
from dataclasses import dataclass


@dataclass(frozen=True)
class Point:
    x: float
    y: float
    z: float = 0
    visibility: float = 1


def angle(a: Point, b: Point, c: Point) -> float:
    ab = (a.x - b.x, a.y - b.y, a.z - b.z)
    cb = (c.x - b.x, c.y - b.y, c.z - b.z)
    dot = sum(left * right for left, right in zip(ab, cb, strict=True))
    mag_ab = math.sqrt(sum(value * value for value in ab))
    mag_cb = math.sqrt(sum(value * value for value in cb))
    if mag_ab == 0 or mag_cb == 0:
        return 0
    cosine = max(-1, min(1, dot / (mag_ab * mag_cb)))
    return math.degrees(math.acos(cosine))


def slope_degrees(a: Point, b: Point) -> float:
    return abs(math.degrees(math.atan2(b.y - a.y, b.x - a.x)))


def midpoint(a: Point, b: Point) -> Point:
    return Point((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2, min(a.visibility, b.visibility))


def normalized_variance(values: list[float]) -> float:
    if len(values) < 2:
        return 0
    mean = sum(values) / len(values)
    variance = sum((value - mean) ** 2 for value in values) / len(values)
    return variance ** 0.5
