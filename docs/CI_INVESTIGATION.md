# CI investigation

The four runs 37368542580, 37368636612, 37368732590, and 37368789803 reported: “The job was not acquired by Runner of type hosted even after multiple attempts.” These were infrastructure failures before steps ran, not failing test assertions.

On commit `4d15e24`, [mobile passed](https://github.com/Sourya-Prabaharan/FitForm/actions/runs/37368732590) and [backend passed](https://github.com/Sourya-Prabaharan/FitForm/actions/runs/37368789803) in separate runs. Keep all checks enabled. If allocation fails again, rerun failed jobs after GitHub runner availability recovers. Pinning the runner image makes its operating system explicit but cannot guarantee hosted-runner capacity.
