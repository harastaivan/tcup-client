# Changelog

<a name="1.3.5"></a>

## 1.3.5 (2022-07-07)

### Changed

-   🔧 Update soaring spot url [[2b26c63](https://github.com/harastaivan/tcup-client/commit/2b26c63865c7bf557502313132f5bc58e13a7551)]

<a name="1.3.4"></a>

## 1.3.4 (2022-05-04)

### Changed

-   🔧 Enable signup [[4c7dc36](https://github.com/harastaivan/tcup-client/commit/4c7dc3631f769c802f8bd1c3e63a29006a7b172c)]

### Removed

-   🔥 Remove REACT_APP_SIGNUP_DISABLED env variable [[0bbede6](https://github.com/harastaivan/tcup-client/commit/0bbede62af549c68f55d02336ca19eb41949007d)]

<a name="1.3.3"></a>

## 1.3.3 (2022-04-21)

### Fixed

-   🐛 Fix igcId admin form validation [[20406c8](https://github.com/harastaivan/tcup-client/commit/20406c8e2515c5c395541b4913876bda6a43f029)]

<a name="1.3.2"></a>

## 1.3.2 (2022-04-17)

### Added

-   ✅ Add e2e test for registration flow [[05b8357](https://github.com/harastaivan/tcup-client/commit/05b83573a5a9deb868665d8d3884d1235782d625)]
-   ✅ Add e2e test for login flow [[0178b68](https://github.com/harastaivan/tcup-client/commit/0178b68322adab5d529afc32f755aa83c8241e63)]
-   ✨ Setup cypress e2e testing [[0a9e95f](https://github.com/harastaivan/tcup-client/commit/0a9e95fefab5862035862d13c1dc9da8aa78bb43)]
-   ➕ Add Cypress [[d891aba](https://github.com/harastaivan/tcup-client/commit/d891abab24ced511d94c36f630f4d815e3a3a08f)]

<a name="1.3.1"></a>

## 1.3.1 (2022-04-16)

### Miscellaneous

-   👷 Deploy production job [[2ebf470](https://github.com/harastaivan/tcup-client/commit/2ebf47048ab6a3ba952ff5155675ea6f165a9cbd)]
-   👷 Deploy development job [[7651424](https://github.com/harastaivan/tcup-client/commit/76514244b3c65a3681451b6f536fe9b7a054bb8c)]
-   👷 Add deploy github action [[73a2a71](https://github.com/harastaivan/tcup-client/commit/73a2a71cc971f8c16f3ebe764f4581d484edfc2e)]
-   👷 Rename CI github action [[74432f1](https://github.com/harastaivan/tcup-client/commit/74432f1a12453fb718ca27e551d2cdf99ad5e0a8)]

<a name="1.3.0"></a>

## 1.3.0 (2022-04-16)

### Added

-   ✨ Update registration form to use glider types depending on competition class [[f79394f](https://github.com/harastaivan/tcup-client/commit/f79394fa9c8eb2194c64bde17177f94c4fbac03e)]

<a name="1.2.1"></a>

## 1.2.1 (2022-04-11)

### Miscellaneous

-   👷 Add development branch to CI [[ce5e663](https://github.com/harastaivan/tcup-client/commit/ce5e663ca6ee88c5c9c33586a1db29910f67d461)]

<a name="1.2.0"></a>

## 1.2.0 (2022-04-11)

### Added

-   ✨ Add refactored startingList module [[6544cd4](https://github.com/harastaivan/tcup-client/commit/6544cd46f467fe0b06a1653b31c67d46814963f4)]
-   ✨ Add LoadingButton form component [[69d9771](https://github.com/harastaivan/tcup-client/commit/69d97717f4948ec5d69f22a09b051f0616ecf321)]
-   ✨ Add apiError generic message [[a59e39e](https://github.com/harastaivan/tcup-client/commit/a59e39e87535f8ba3ba296aedb3219383bb5b2c8)]

### Removed

-   🔥 Remove startingList redux store [[7515a01](https://github.com/harastaivan/tcup-client/commit/7515a014d76b6bbb7272466ca58aaef2c6570d98)]

### Fixed

-   🐛 Fix typo [[b85b91e](https://github.com/harastaivan/tcup-client/commit/b85b91ec5d653c4f1afdfb4c4a46759c5421e594)]

### Miscellaneous

-   🌐 Update translations [[21a1b3e](https://github.com/harastaivan/tcup-client/commit/21a1b3ed0cb822ff814d114c3f3487b62a6a4d11)]
-   🏷️ Add types for file-saver [[97f6b17](https://github.com/harastaivan/tcup-client/commit/97f6b173788f9ef46ff4775b671e6338ce39541f)]

<a name="1.1.0"></a>

## 1.1.0 (2022-03-31)

### Added

-   ✨ Improve success/error handling in SendIgc [[c13ac49](https://github.com/harastaivan/tcup-client/commit/c13ac495cfe27dc5441488372db3c17d874430a5)]
-   ✨ Use toast module, 🔥 Remove success and error stores [[b635653](https://github.com/harastaivan/tcup-client/commit/b6356532d000d6eb89a3ec1fe7d4a894929f10a3)]
-   ✨ Add toast module made for notifications and error handling [[6c51ed9](https://github.com/harastaivan/tcup-client/commit/6c51ed90ed0559e75c47914b573c5928ffbcb08a)]
-   ➕ Add react-hot-toast [[d17126f](https://github.com/harastaivan/tcup-client/commit/d17126fa2e8f8af1b59d7ff068e51949c2f899ca)]

### Changed

-   🚸 Add remaining success/error toasts [[cb262ab](https://github.com/harastaivan/tcup-client/commit/cb262abddcb16af4a74fb0240f9289f079c01e84)]
-   🚸 Improve logout toast [[4ecd55d](https://github.com/harastaivan/tcup-client/commit/4ecd55d8978e7158bc35781726900da90db9aecb)]
-   💄 Fix footer margin [[02eae6f](https://github.com/harastaivan/tcup-client/commit/02eae6f234396ad3a6b7bdbca6969b4f1c226da7)]
-   ♻️ Refactor hooks, implement useOnlineStatus, useBackendStatus [[c76501f](https://github.com/harastaivan/tcup-client/commit/c76501f071ea4882062cf1c6a50dab2e58903923)]

### Fixed

-   🐛 Fix sendIgc infinite loading when no competition days [[2ccd066](https://github.com/harastaivan/tcup-client/commit/2ccd066d0ef2ea5de7c54704c73b8b6dafb2c967)]
-   🐛 Fix Results page when no results [[4293259](https://github.com/harastaivan/tcup-client/commit/429325971e02f9e045b6a1472a8d83e593e360c9)]
-   🐛 Fix phone regex [[388b2ec](https://github.com/harastaivan/tcup-client/commit/388b2ecda3ca64d1c69edc046c47a89a186d0a74)]

### Miscellaneous

-   🌐 Add translations [[890dba9](https://github.com/harastaivan/tcup-client/commit/890dba9bf23d652351a80b0d4b9fb9611d75bf7f)]
-   💩 Todo registration redirect [[35025c4](https://github.com/harastaivan/tcup-client/commit/35025c4b433e560b6c02df7b24d91cede70135df)]

<a name="1.0.2"></a>

## 1.0.2 (2022-03-30)

### Miscellaneous

-   👷 Remove fast forward PR github action [[8ff65a7](https://github.com/harastaivan/tcup-client/commit/8ff65a7f2616d25617d06a7a132862d1c4d16e28)]

<a name="1.0.1"></a>

## 1.0.1 (2022-03-30)

### Fixed

-   🐛 Add app title back [[ea0335a](https://github.com/harastaivan/tcup-client/commit/ea0335ab5df9524b634440173e234ac50fc533a0)]

### Miscellaneous

-   👷 Add fast forward PR github action [[68dc29c](https://github.com/harastaivan/tcup-client/commit/68dc29c2a5671f0c4d23568d5b15f8343f31b76f)]

<a name="1.0.0"></a>

## 1.0.0 (2022-03-30)

### Added

-   ✨ Update and refactor Home page [[c758319](https://github.com/harastaivan/tcup-client/commit/c75831955a7c2e5983e7731397a05ff186194a75)]
-   ✨ Update Archive [[fb33491](https://github.com/harastaivan/tcup-client/commit/fb33491b891d12645e8aba73ad6479c4195ab900)]
-   ✨ Refactor RegistrationPage to use Registration module [[e018d2d](https://github.com/harastaivan/tcup-client/commit/e018d2d00c3811e68fbc06f135af15488cda5fcb)]
-   ✨ Add registration module [[7606f46](https://github.com/harastaivan/tcup-client/commit/7606f46fbb4309c82d84b207ac88b5e0160e4e24)]
-   ✨ Add Form module [[26a8187](https://github.com/harastaivan/tcup-client/commit/26a8187ffc665ddb53a519dc989c1cc901af6f31)]
-   ✨ Setup redux toolkit in store [[26aaba4](https://github.com/harastaivan/tcup-client/commit/26aaba437b48bcb27a6a00fee603f82f474a2dfb)]
-   ➕ Add redux toolkit, react-hook-form, yup [[5dfc1d5](https://github.com/harastaivan/tcup-client/commit/5dfc1d56168db5e6c4757c6ffab02932e6f6cf3b)]
-   ✨ Introduce SpinnerFullPage [[69b6499](https://github.com/harastaivan/tcup-client/commit/69b649971c07ba329dd7ca38bd7c5e4dbc0c0787)]

### Changed

-   💄 Update Footer [[78ca25a](https://github.com/harastaivan/tcup-client/commit/78ca25a5f592677fc6e302e7ea2dd8b92600800f)]
-   ♻️ Refactor Spinner full page [[a592f91](https://github.com/harastaivan/tcup-client/commit/a592f91835daae49bbeb255b2ef9b841cc4542ae)]
-   ♻️ Create constants and refactor [[572373c](https://github.com/harastaivan/tcup-client/commit/572373c02e3a0a75d4305c10b64add3a6363ec43)]

### Removed

-   🔥 Remove REACT_APP_TITLE from env vars [[a617666](https://github.com/harastaivan/tcup-client/commit/a61766637e118d40b152f43dfea779828611a182)]

### Fixed

-   💚 Fix format:check [[2bd54be](https://github.com/harastaivan/tcup-client/commit/2bd54be74be04266228af2d76a4e9953b5558d85)]
-   💚 Setup CI build pipeline [[223ad85](https://github.com/harastaivan/tcup-client/commit/223ad85bad3545d395e98eaa85eb1528d2d8e2ed)]
-   💚 Remove Circle CI [[9d77e2f](https://github.com/harastaivan/tcup-client/commit/9d77e2f4c58d3793ceeaf1e317940ab45e901528)]

### Miscellaneous

-   🌐 Update translations [[1c6ab33](https://github.com/harastaivan/tcup-client/commit/1c6ab33376cb284fc22a8d098f487bc34ba3978b)]
-   💫 Animate SpinnerFullPage [[8e37d55](https://github.com/harastaivan/tcup-client/commit/8e37d55f26e04e09c8c7159d37c6e1d0747dcd2c)]
-   🧑‍💻 Add better pathing - src baseUrl [[8e52f98](https://github.com/harastaivan/tcup-client/commit/8e52f986650449296b8b1990f2ea628232675143)]
-   🧑‍💻 Enforce import type [[38337db](https://github.com/harastaivan/tcup-client/commit/38337db632ae1910a9d49c37ce63fc4cc466734a)]
-   🧑‍💻 Strong type react-i18next [[e0def75](https://github.com/harastaivan/tcup-client/commit/e0def753b13b5a08bcf3df4c167fb5cc8222a519)]
-   🧑‍💻 Add prettier config path [[4c055ff](https://github.com/harastaivan/tcup-client/commit/4c055ff7bdeabb332ac7e86972600c1a67d8871d)]

<a name="0.12.0"></a>

## 0.12.0 (2022-03-30)

### Added

-   ➕ Add gitmoji-changelog [[eceb446](https://github.com/harastaivan/tcup-client/commit/eceb4465acaec2070e238ba2f34638c033873923)]

### Miscellaneous

-   🧑‍💻 Add version script [[cfdbccf](https://github.com/harastaivan/tcup-client/commit/cfdbccf490003a46d899fe94ac58a46fcf45a070)]
-   Version 0.11.6 [[c432429](https://github.com/harastaivan/tcup-client/commit/c4324293628281f051ce7da68fca06bd211d4b6f)]
-   Cancel send igc and competitor statuses disabled [[1c9b289](https://github.com/harastaivan/tcup-client/commit/1c9b2897e02f6e91efaf13f22d2c2ec96f5e90a3)]
-   Version 0.11.5 [[9fe62dd](https://github.com/harastaivan/tcup-client/commit/9fe62dd2991975db63f1fc083ef9cd859769fab5)]
-   Implement registration completed filtering in StartingList [[10d6203](https://github.com/harastaivan/tcup-client/commit/10d620345c351d709e469a6a9da3bb4e025b0ec3)]
-   Refactor StartingList [[61e358b](https://github.com/harastaivan/tcup-client/commit/61e358be4c9445fd2e5e8d1bb911135e4529082f)]
-   Add fields to RegistrationForm [[da61fd2](https://github.com/harastaivan/tcup-client/commit/da61fd2abc62eb9e716560c44c51fe442ee9ebc7)]
-   Implement Checkbox [[b6ca635](https://github.com/harastaivan/tcup-client/commit/b6ca635ead1c6ddbee6e8d0b119278c025c40178)]
-   Convert Login to FC [[999db93](https://github.com/harastaivan/tcup-client/commit/999db939a5a03df79ba05f28aaea7561a9f8e125)]
-   Version 0.11.4 [[504a493](https://github.com/harastaivan/tcup-client/commit/504a4936d585be0303889b6fdd0dd84c4eed00cd)]
-   Call loadUser only if we have the token [[14fd009](https://github.com/harastaivan/tcup-client/commit/14fd0093b05efe7da76d8f969d9b298c08dbe9ed)]
-   Implement Offline status [[81ff27e](https://github.com/harastaivan/tcup-client/commit/81ff27efcd100a3ba66dc0df3a84933aa12c8186)]
-   Refactor TestMode [[833922c](https://github.com/harastaivan/tcup-client/commit/833922c5a8876ed774452a066a439441c40daa1d)]
-   Version 0.11.3 [[63ecbec](https://github.com/harastaivan/tcup-client/commit/63ecbecfc648db41af287472c9ed8cb82d90067a)]
-   Fix change user info route duplicate email bug [[0bfa9a2](https://github.com/harastaivan/tcup-client/commit/0bfa9a27349873fdddba32b53cf53b5613ffb8b1)]
-   Update x-auth-token to Authorization Bearer [[f7f24e6](https://github.com/harastaivan/tcup-client/commit/f7f24e6036985d0a0f926058bd46ccdb855d9b14)]
-   Fix Sponsors key error [[07b3615](https://github.com/harastaivan/tcup-client/commit/07b3615b53b9ef784de783496bd8d5c06e1cb969)]
-   Version 0.11.2 [[3d9202e](https://github.com/harastaivan/tcup-client/commit/3d9202e3479a4041e6b38c3f2171d9b2822061f5)]
-   Add Divider [[c0ff401](https://github.com/harastaivan/tcup-client/commit/c0ff401ff7a5c0d82b00275594ab5dce2f749b78)]
-   Version 0.11.1 [[aad447b](https://github.com/harastaivan/tcup-client/commit/aad447b5b8ad26064c00feaf03144ac0b5568a6a)]
-   Fix translations [[663587c](https://github.com/harastaivan/tcup-client/commit/663587cb1474d685d7e29af84a3a64489d519c64)]
-   Add Sponsors to Home [[301a305](https://github.com/harastaivan/tcup-client/commit/301a305c6b5b9093e179916c98e86ff866a838a2)]
-   Add useSponsors data source [[7355805](https://github.com/harastaivan/tcup-client/commit/7355805781297f447c15d8d6b12a07fed143381f)]
-   Add 2 logos [[70e21ec](https://github.com/harastaivan/tcup-client/commit/70e21eca021a6b85d524496564e15d0dda761f9b)]
-   Install styled-components [[60ebaa2](https://github.com/harastaivan/tcup-client/commit/60ebaa2ed002dbea0d5dd9c34f78d3735cb9237b)]
-   Update version [[59651c9](https://github.com/harastaivan/tcup-client/commit/59651c94d11afa5df7dc323100601116bbe0c1c4)]
-   Use backend endpoints [[72ec560](https://github.com/harastaivan/tcup-client/commit/72ec560e7f0bb0ad6b3d0211272690c4f6259358)]
-   Update results data model according to backend [[115c08b](https://github.com/harastaivan/tcup-client/commit/115c08bf80f8b7063af1e325436b528d68d5cc33)]
-   Split Tasks and Results [[7812359](https://github.com/harastaivan/tcup-client/commit/781235928ac74042d936c15be15c8ccf13fad601)]
-   Implement Results [[7879cf5](https://github.com/harastaivan/tcup-client/commit/7879cf57bd00dc262912cb422b69a174f67087b5)]
-   Implement DailyResults [[ea9c64a](https://github.com/harastaivan/tcup-client/commit/ea9c64aaa00d63c95b2b4496b6ff5337ea3fa5cc)]
-   Implement TotalResults [[711f238](https://github.com/harastaivan/tcup-client/commit/711f238cdf3655248bb4fb817e9326c271f9ed41)]
-   Implement TopResults [[b7e1e72](https://github.com/harastaivan/tcup-client/commit/b7e1e72e07b72e9d54fe78a337380ce6ef9508ba)]
-   Implement SeeYouCloudVisualisation [[d4c6413](https://github.com/harastaivan/tcup-client/commit/d4c64135cd68d9a4cf5ee13b63663905e7599162)]
-   Implement ResultsWrapper [[4a1a708](https://github.com/harastaivan/tcup-client/commit/4a1a708d2411daae604f49e480934a55dfc9b68f)]
-   Create results hooks [[6714fa8](https://github.com/harastaivan/tcup-client/commit/6714fa83a3ef2d198877e8c1e0b22e5141c632ce)]
-   Create mock api endpoints [[ffa9ae8](https://github.com/harastaivan/tcup-client/commit/ffa9ae8c1f5e6c088d0e19c3dbb4b5b4a8ad7370)]
-   Dont show footer in results page [[05c4e85](https://github.com/harastaivan/tcup-client/commit/05c4e854ff613d668263962e3b415777542888a8)]
-   Remove soaringSpotLink [[22df261](https://github.com/harastaivan/tcup-client/commit/22df2612cf98f3bbc7671c026c06ec9daa5d6333)]
-   Add mailing list [[a0edcbc](https://github.com/harastaivan/tcup-client/commit/a0edcbc6e26d871b8dc2404d15fc281c2c5213cd)]
-   Add mailing list [[4cdb302](https://github.com/harastaivan/tcup-client/commit/4cdb30270c82de25b6c08ccf0957abef041b4bcc)]
-   Implement Users List [[97a9a04](https://github.com/harastaivan/tcup-client/commit/97a9a0478be11029dd0fd2b40d006e41b6659ed7)]
-   WIP [[aef3bc5](https://github.com/harastaivan/tcup-client/commit/aef3bc53a0418c1cdbfd336d81dd7f5bbc1372c3)]
-   Create user list component [[e10f526](https://github.com/harastaivan/tcup-client/commit/e10f5261c279c712cc42cc728d2e6286b827b531)]
-   Enable registrations [[fc3e732](https://github.com/harastaivan/tcup-client/commit/fc3e7320314a3c1b50ac3a5419d5430709291dbd)]
-   Version 0.10.2 [[ca13ae1](https://github.com/harastaivan/tcup-client/commit/ca13ae1a3889d3fe2d9eb70cdd02713ab84a0ca9)]
-   Implement Reset Password [[d2dc47e](https://github.com/harastaivan/tcup-client/commit/d2dc47e36ac69a89902c870004f0e18b42c30415)]
-   Update version [[5bca0f0](https://github.com/harastaivan/tcup-client/commit/5bca0f03d4b00f6574e9c0650c1b9da120c0df4e)]
-   Fix CI [[7ffdad5](https://github.com/harastaivan/tcup-client/commit/7ffdad5ebdf0ce50e7be42b9173effe1248ced65)]
-   Convert Home, News to typescipt [[e929635](https://github.com/harastaivan/tcup-client/commit/e929635a77ac2b04efd64306166a477f6a74f996)]
-   Add types to auth, success, error store [[6d405fc](https://github.com/harastaivan/tcup-client/commit/6d405fc3226b210a15805a5387138fe9cc21ec92)]
-   Fix store [[7b13da6](https://github.com/harastaivan/tcup-client/commit/7b13da6471c2e251844ccfb9f8c6145046d47f17)]
-   Rework redux folder structure [[0508fdc](https://github.com/harastaivan/tcup-client/commit/0508fdc35893970e05c11af9184bdff2b9f12d07)]
-   Change prettier formatting [[928ffc0](https://github.com/harastaivan/tcup-client/commit/928ffc01175165ae61b550182b9cb6b1c212fbd6)]
-   Add typescript [[41050ed](https://github.com/harastaivan/tcup-client/commit/41050ed3c4563853fbd9e85b51e87412210f84dc)]
-   Disable registration [[992a7dc](https://github.com/harastaivan/tcup-client/commit/992a7dca8e79b9b7aa72459a9a7795018493e190)]
-   Fix strings [[e0644d0](https://github.com/harastaivan/tcup-client/commit/e0644d01e21c130ba2cd6fee027528c36b1ea301)]
-   Version 0.9.1 [[d8985b6](https://github.com/harastaivan/tcup-client/commit/d8985b65bd8b696ca66ddcac5fb0f63c86faf6ec)]
-   Change date of competition [[80ca3fa](https://github.com/harastaivan/tcup-client/commit/80ca3faea785370015c0f710059b761bcc877507)]
-   Disable statuses and send igc [[cd1a7d4](https://github.com/harastaivan/tcup-client/commit/cd1a7d4daa72fb82b7b884f76ec1558ee092a369)]
-   Disable soaring spot url [[b172645](https://github.com/harastaivan/tcup-client/commit/b17264551f7746d0aa0211f86cd936c7eb877971)]
-   Change design tcup 2021 [[e96b183](https://github.com/harastaivan/tcup-client/commit/e96b183d8642682fd47afd0129172896828c21a7)]
-   Implement DownloadIgc for downloading and managing Igc files [[e4e744c](https://github.com/harastaivan/tcup-client/commit/e4e744c3cd0760e6e9685194e5ca73b3c701d8f6)]
-   Add DownloadIgc component [[c22c48d](https://github.com/harastaivan/tcup-client/commit/c22c48d36e2433ceaa6c68f46eefdc765f9011e3)]
-   Fix getCompetitionDay bug [[982eb42](https://github.com/harastaivan/tcup-client/commit/982eb427a865db9a58be39b24d2990c664231f99)]
-   Version 0.8.16 [[ae1bfcf](https://github.com/harastaivan/tcup-client/commit/ae1bfcf3bc1984125f42c4b5cc52ca4aef8867d6)]
-   Logout after 59 minutes [[5e80f4a](https://github.com/harastaivan/tcup-client/commit/5e80f4a3cfd72943191ea419f5ea56383ce6b287)]
-   Fix build errors [[79710aa](https://github.com/harastaivan/tcup-client/commit/79710aa88efc73984b0352e67e1f6f7f732fdd09)]
-   Add securitas message [[7b10339](https://github.com/harastaivan/tcup-client/commit/7b1033928baf5abbc995bf8f5a96e3946d816467)]
-   Replace registration with photogalery on homepage [[07ff9ce](https://github.com/harastaivan/tcup-client/commit/07ff9ce236193cc80fd6dcb8d6497ace06b2c7a0)]
-   Fix linting error [[2fc00f6](https://github.com/harastaivan/tcup-client/commit/2fc00f6a6511b920aef32ba1172c4fc2b363488e)]
-   Add translations, version 0.8.15 [[c0c0555](https://github.com/harastaivan/tcup-client/commit/c0c0555a9d3afcce6335a7e1703047c19d74e519)]
-   Add tracking to homepage [[e7fcac9](https://github.com/harastaivan/tcup-client/commit/e7fcac935750785880067598de5e03ab3d3e849f)]
-   Add me to contacts [[73d7866](https://github.com/harastaivan/tcup-client/commit/73d786640a5583e77798a84b96982c66362ccd4b)]
-   Version 0.8.14 [[3f3c1e2](https://github.com/harastaivan/tcup-client/commit/3f3c1e2e4009bc3d581b90ef1dc93ca6e5b004cf)]
-   Fix success/error SendIgc message not translated [[38c60c9](https://github.com/harastaivan/tcup-client/commit/38c60c9b47d2c09c5c3a8c397639fe42656428bc)]
-   Update Contacts [[238dabb](https://github.com/harastaivan/tcup-client/commit/238dabb1ad4527cad71c118baf313dce1a32c329)]
-   Version 0.8.13 [[95ed2dc](https://github.com/harastaivan/tcup-client/commit/95ed2dc0950cefdd2b509bb56ab47fed3253cff4)]
-   Add translations [[5156739](https://github.com/harastaivan/tcup-client/commit/51567390c70f6b9ee4540296e8cb01d4ff36c050)]
-   Fix linting errors [[d0614c2](https://github.com/harastaivan/tcup-client/commit/d0614c229383b5cdc17428b0163fe52d62775a6e)]
-   Implement SendIgc component for User with success/error handling [[7237c71](https://github.com/harastaivan/tcup-client/commit/7237c7159b28837245440664d31ac965fc41f278)]
-   Add current competition day to SendIgc component [[e680f56](https://github.com/harastaivan/tcup-client/commit/e680f56f3257ad79796b71461890607ad58ec446)]
-   Implement SendIgc component [[9c41b47](https://github.com/harastaivan/tcup-client/commit/9c41b47ec6a488ebe108eead51ecf2ba1a708316)]
-   Version 0.8.12 [[4fce278](https://github.com/harastaivan/tcup-client/commit/4fce278df378ac67c7ed32ac0a15d4e5354c5d66)]
-   Fix registration error showing when it should be hidden [[a8e9e79](https://github.com/harastaivan/tcup-client/commit/a8e9e79371223870eeb544db0f64fe20a33a89e1)]
-   Adding link to soaringspot results [[b61eb33](https://github.com/harastaivan/tcup-client/commit/b61eb33154689aaa5186e93715745bc201fbb12c)]
-   Add translations [[6b9ec6e](https://github.com/harastaivan/tcup-client/commit/6b9ec6e4b943ede5820a894625da7156d7bc65c5)]
-   Fix Date [[ff4ff4b](https://github.com/harastaivan/tcup-client/commit/ff4ff4b5ff6db0bd6eb023b3cf12daba7679e200)]
-   Version 0.8.10 [[8ccb26f](https://github.com/harastaivan/tcup-client/commit/8ccb26f28501171aaab919035cb1770c28fca664)]
-   Implement Competitor statuses [[07d77ab](https://github.com/harastaivan/tcup-client/commit/07d77ab3d46c5746c2648237a6fb61a85da03467)]
-   Add translations [[19b21ff](https://github.com/harastaivan/tcup-client/commit/19b21ff7b79b91541cc48c2f6b0a5553a33d27f6)]
-   Implement Competition days [[65a9d48](https://github.com/harastaivan/tcup-client/commit/65a9d48773c64f21c857334b6086b88adfbdbcac)]
-   Version 0.8.9 [[1799070](https://github.com/harastaivan/tcup-client/commit/1799070c6812e07989890506dfdbff2dfbd650e9)]
-   Update homepage photo [[c802e46](https://github.com/harastaivan/tcup-client/commit/c802e46ef8e2f209558a6de389f03d6bbe21b57a)]
-   Bug fixes [[85e5177](https://github.com/harastaivan/tcup-client/commit/85e5177df355fceb8e531f38fbac52a6f9c5097a)]
-   Make adjustments for mobile [[8593b03](https://github.com/harastaivan/tcup-client/commit/8593b03bc8dec24af68224ebc706ff602be517fe)]
-   Version 0.8.8 [[2dcd812](https://github.com/harastaivan/tcup-client/commit/2dcd812c652be463dfebf3e96183193a9b4b4ec5)]
-   Redesign homepage with big showcase picture [[85668ca](https://github.com/harastaivan/tcup-client/commit/85668cad8ea0228be181a1604da66a0efc7b0e58)]
-   Version 0.8.7 [[c9f93bd](https://github.com/harastaivan/tcup-client/commit/c9f93bd25b9814ea654587b9997d0e03e54abfb2)]
-   Add email checkbox to AddNews [[f8cd23a](https://github.com/harastaivan/tcup-client/commit/f8cd23aa43c03c9eff0a8c38d5153c5ef1ad2737)]
-   Adjust to new respones from addNews action [[a17a284](https://github.com/harastaivan/tcup-client/commit/a17a284a3dd76b0628b47155962aec7416bcb526)]
-   Version 0.8.6 [[1e04c2d](https://github.com/harastaivan/tcup-client/commit/1e04c2d0d04b834a274336ca246f0c78b168b793)]
-   Dont call getRegistration when not logged in [[e534640](https://github.com/harastaivan/tcup-client/commit/e53464084514dfc9595e1cdeb389281a2eb2f730)]
-   Add more translations [[ae88e01](https://github.com/harastaivan/tcup-client/commit/ae88e0197a443a3f3147d6cc4c71aadd471d8ef4)]
-   Add translations [[0a81a69](https://github.com/harastaivan/tcup-client/commit/0a81a69dc99e7a49bce8119f9e5e91b21e8edbc5)]
-   Temporarily disable tests [[907fdbd](https://github.com/harastaivan/tcup-client/commit/907fdbd72778923433ec5afe48bf8be4608bdae0)]
-   Wrap app in WrappedApp [[1cc7f36](https://github.com/harastaivan/tcup-client/commit/1cc7f36a54fa2dfbf36cb53d07d8d74e371a52d7)]
-   Fix warning [[4ce9776](https://github.com/harastaivan/tcup-client/commit/4ce97763becd77fbe20f24f5f342cf2922d8e48d)]
-   Change localStorage to sessionStorage [[9c5fe3e](https://github.com/harastaivan/tcup-client/commit/9c5fe3e20be461f5ce6900d3cefeeca4b68abfc3)]
-   Add table overflow x to Documents table [[c95aacf](https://github.com/harastaivan/tcup-client/commit/c95aacf896b32179c37547c4e73fd2b3d2f56eae)]
-   Add Archive component [[66c97fa](https://github.com/harastaivan/tcup-client/commit/66c97fa8dc613f2fb44e77caa2d948749e2a7c8d)]
-   Delete local error showing since its global now [[1bb37e9](https://github.com/harastaivan/tcup-client/commit/1bb37e9e68c3ce4ae8dd6a5ab19bd2113a186127)]
-   Implement submit AdminRegistrationForm and show errors [[d2fecb2](https://github.com/harastaivan/tcup-client/commit/d2fecb2b6af79b11a93c425c849ff7d0fb868ccc)]
-   Create otherRegistration substate to store registrations managed by admin [[08d5f55](https://github.com/harastaivan/tcup-client/commit/08d5f551e5cc1f09e340417c5328bba30d952473)]
-   Create resetRegistration redux action [[c9cde41](https://github.com/harastaivan/tcup-client/commit/c9cde411c0ad18f47cf8db035b0fa939429c7ba5)]
-   Refactor AdminRegistrationForm and Registration containers [[4593958](https://github.com/harastaivan/tcup-client/commit/459395829ba4cb85e049a41c7f9dd86999e633ae)]
-   Create AdminRegistrationForm [[c9ddb01](https://github.com/harastaivan/tcup-client/commit/c9ddb01c1c85a7ea3a66916d1e1c2ebf1f9dccbc)]
-   Version 0.8.5 [[dc461da](https://github.com/harastaivan/tcup-client/commit/dc461dada6362506eaca19e0ce947c96237f1208)]
-   Use RegistrationForm component in EditRegistrationForm container [[2a279fe](https://github.com/harastaivan/tcup-client/commit/2a279fe4b3929a74162f602ca7a681dc81d33306)]
-   Use RegistrationForm component in RegistrationForm container [[3dcbdc4](https://github.com/harastaivan/tcup-client/commit/3dcbdc45e203c7537064ded4743b6a11133a5aa1)]
-   Create RegistrationForm component [[6a5f97b](https://github.com/harastaivan/tcup-client/commit/6a5f97b766f816fc24c272fb0941608b59190eb8)]
-   Add Row &amp; Col where it should be [[40e3191](https://github.com/harastaivan/tcup-client/commit/40e3191ed18c3b157fbd81ee955bb8f5ae5d53db)]
-   Refactor RegistrationForm [[7799a27](https://github.com/harastaivan/tcup-client/commit/7799a273c02713ffeaa1b26745f06d4233a30a14)]
-   Create ValidatedInput and refactor EditRegistrationForm [[aa71c8b](https://github.com/harastaivan/tcup-client/commit/aa71c8b94e5583af2a35a1ad614feffce7eee280)]
-   Rename components to containers [[6347f05](https://github.com/harastaivan/tcup-client/commit/6347f057a63298aff0c82d46cfb4a3f6cc7b58ac)]
-   Version 0.8.4 [[3370785](https://github.com/harastaivan/tcup-client/commit/3370785e56ae839a3fd10128e33463c5498c1445)]
-   Change icon from emoji to svg cdn [[a09caf0](https://github.com/harastaivan/tcup-client/commit/a09caf00aff381b91e81980edda43d6608616571)]
-   Version 0.8.3 [[27178b3](https://github.com/harastaivan/tcup-client/commit/27178b378373b0a4169a5ef5bdd800560370b055)]
-   Add new country translations [[b24243f](https://github.com/harastaivan/tcup-client/commit/b24243f37a3633b5e0f2861745e1977f0ef47b7b)]
-   Version 0.8.2 [[86fbb7a](https://github.com/harastaivan/tcup-client/commit/86fbb7a0010172e5b651c12894fc1a7beb44f20d)]
-   Add stable polyfill [[570633d](https://github.com/harastaivan/tcup-client/commit/570633d99fe4c3a76674e3d02bdfcf198a8420a3)]
-   Version 0.8.1 [[14e3706](https://github.com/harastaivan/tcup-client/commit/14e3706d255e9bdd052651b4c7c8bc8153f788ae)]
-   Support ie9 [[ec00a26](https://github.com/harastaivan/tcup-client/commit/ec00a2638fad0e2d69baf10fa976c5c622a12999)]
-   Install react-app-polyfill [[e519858](https://github.com/harastaivan/tcup-client/commit/e5198581f32727ba6d2f098bccc9da3da62b2a22)]
-   Add Counter to starting list classes [[ad606cc](https://github.com/harastaivan/tcup-client/commit/ad606ccbee5a47a3c414a3142678410f10c31581)]
-   Version 0.8.0 [[3e7b3b5](https://github.com/harastaivan/tcup-client/commit/3e7b3b59320641cde9bf388923ba2afb3048cf27)]
-   Translate GdprConsent [[dcb660c](https://github.com/harastaivan/tcup-client/commit/dcb660c2b0a1b82b32fa81eb82e25013a3e4f165)]
-   Translate AddNews and convert to rfc [[44ce44f](https://github.com/harastaivan/tcup-client/commit/44ce44ff57a8945594149660c9ccafd151d6d1f0)]
-   Translate error message and refactor [[9abc076](https://github.com/harastaivan/tcup-client/commit/9abc076892f9ab4d1b0fc69d75b9a798128b1cee)]
-   Translate error messages [[5b60a86](https://github.com/harastaivan/tcup-client/commit/5b60a869d60463ae075414ce9746f67cdfd4f249)]
-   Translate App [[822488b](https://github.com/harastaivan/tcup-client/commit/822488bcf690257b5c7ebf4d4c813367e03adff7)]
-   Translate StartingList [[1de1c01](https://github.com/harastaivan/tcup-client/commit/1de1c0109a2469beedb88c4ea10350ac3b12c88b)]
-   Translate Signup [[8ed30c9](https://github.com/harastaivan/tcup-client/commit/8ed30c97f12485ed5bd096ab4b6f04c1c8badd26)]
-   Translate RegistrationForm [[ba7c8cf](https://github.com/harastaivan/tcup-client/commit/ba7c8cf03965de9bff498d7c21c1f6deb8b6e2a8)]
-   Translate Registration [[5665c95](https://github.com/harastaivan/tcup-client/commit/5665c9587bb3d8aa517e3a1b07a3016e027d3351)]
-   Translate News [[4bb2dd0](https://github.com/harastaivan/tcup-client/commit/4bb2dd02d32eec84a5cf5c308033827dee40005b)]
-   Translate Login [[1c560ce](https://github.com/harastaivan/tcup-client/commit/1c560ce73f2b71c15563f6b50ec0805ad783937b)]
-   Translate ChangePassword [[374b2cf](https://github.com/harastaivan/tcup-client/commit/374b2cf13f58f68f275f4271e39a465408d57e7d)]
-   Translate Home [[a2fa8b2](https://github.com/harastaivan/tcup-client/commit/a2fa8b2be2dfcc5b3035fef562377cd3ac69417c)]
-   Dont seperate keys by . [[a49d563](https://github.com/harastaivan/tcup-client/commit/a49d563982401d7496c5fd277696de1e5c1cedbe)]
-   Fix translation in EditRegistrationForm [[85c600d](https://github.com/harastaivan/tcup-client/commit/85c600dc991b1e886ee21fde61491df18f9f076e)]
-   Translate Footer [[f0c16f2](https://github.com/harastaivan/tcup-client/commit/f0c16f2785301136714814863d18bf39cf436bf1)]
-   Translate EditUserSettings [[c286957](https://github.com/harastaivan/tcup-client/commit/c286957b430804344f7fca29c76ee5f61ed3650e)]
-   Translate EditRegistrationForm [[3130476](https://github.com/harastaivan/tcup-client/commit/3130476450c0e43944b6a63be0e647393117ef3a)]
-   Translate Documents [[f76c90c](https://github.com/harastaivan/tcup-client/commit/f76c90cd1a3e247486d5f28835acbca8e0d149bf)]
-   Translate Contacts [[5b9b67b](https://github.com/harastaivan/tcup-client/commit/5b9b67b6279f4965b8a5fbc4a3c51f5ab54e73d4)]
-   Translate AddDocument [[3c7b44b](https://github.com/harastaivan/tcup-client/commit/3c7b44b8e2daa04395fed8a8f50ce956944a7de0)]
-   Convert AppNNavbar to functional component and add SelectLanguage [[6e13865](https://github.com/harastaivan/tcup-client/commit/6e138653565dc7fa0a9abe0e8a1898f3d88e2d7c)]
-   Add SelectLanguage component [[16b0e46](https://github.com/harastaivan/tcup-client/commit/16b0e46f2208326cbaf0704ceb17d7e8a20344df)]
-   Add i18next config and suspense rendering [[1e4f72b](https://github.com/harastaivan/tcup-client/commit/1e4f72b677a7b4847bc21fc33c0d94d9f3febcdc)]
-   Add translation for AppNavbar [[93b9520](https://github.com/harastaivan/tcup-client/commit/93b952091b750372c9de3a3715a3812dbd00e7c9)]
-   Install i18next for react [[0ce443d](https://github.com/harastaivan/tcup-client/commit/0ce443d6b44bbb14f3613dca693ad2f0a3b2a0ee)]
-   Break line at Home h2 [[98756f9](https://github.com/harastaivan/tcup-client/commit/98756f98378780dbdab488b350c77a1adb91d562)]
-   Disable signup [[d093d3d](https://github.com/harastaivan/tcup-client/commit/d093d3d56e69681be91799a4752611d59aff6fec)]
-   Add propTypes to GdprConsent [[d7b05fb](https://github.com/harastaivan/tcup-client/commit/d7b05fb6e928eecf672ddc46461c9ff89ec59364)]
-   Add GDPR consent [[ce4f3fe](https://github.com/harastaivan/tcup-client/commit/ce4f3fe743c97a031707b6bf36732ac5d9f3743a)]
-   Refactor Signup error handling [[c607a6a](https://github.com/harastaivan/tcup-client/commit/c607a6a134d48c727dda6aff04c7cd9a8672f489)]
-   Refactor auth actions [[19f3b92](https://github.com/harastaivan/tcup-client/commit/19f3b928d1a5b25ca9b389b51de2aebc44e7b689)]
-   Change disabled behaviour [[83cc861](https://github.com/harastaivan/tcup-client/commit/83cc861a8f6872fc91f85a3879d7e978bd658d4a)]
-   Create reducers and actions for changing password [[1616350](https://github.com/harastaivan/tcup-client/commit/16163504a8542d1d5fc1f3f0b4718e1c2c45fe0b)]
-   Create success redux [[00f39b5](https://github.com/harastaivan/tcup-client/commit/00f39b523b674f2fa883a395f2762af8644b53a5)]
-   Change error redux [[5c0a5d0](https://github.com/harastaivan/tcup-client/commit/5c0a5d0fb4c7cf5744af4f45f51535eabdcdbabb)]
-   Create forms for changing passwords [[b320444](https://github.com/harastaivan/tcup-client/commit/b320444f903d5b8834fc462188cc343be39d11e8)]
-   Version 0.6.2 [[095b8ea](https://github.com/harastaivan/tcup-client/commit/095b8ea85182e9698ba474920b3cac16bf0ef62c)]
-   Add changeUserInfo to Redux [[a18556f](https://github.com/harastaivan/tcup-client/commit/a18556f7e1005245dc1deb8beecdfbd2833e1ea7)]
-   Prepare forms for editing user settings [[345344f](https://github.com/harastaivan/tcup-client/commit/345344f80f541c16645547222ec2a2fd6787aa0e)]
-   WIP User Settings [[101a449](https://github.com/harastaivan/tcup-client/commit/101a449ee786652140d8c78062f58a842398bc6c)]
-   Add dropdown to user name [[50e0823](https://github.com/harastaivan/tcup-client/commit/50e08233f4d0b8c2b15886bca8f2d689c4147db9)]
-   Version 0.6.1 [[770bf39](https://github.com/harastaivan/tcup-client/commit/770bf392746ad4fab1be073fd175fa6264b73543)]
-   Fix submit in edit registration never disabled [[2b80bf3](https://github.com/harastaivan/tcup-client/commit/2b80bf38295c3e86e06f17f1fd191609f665ea3f)]
-   Fix delete document bug [[b8380e1](https://github.com/harastaivan/tcup-client/commit/b8380e13117d64aa7c3a75114dfb1f2ce09f60e3)]
-   Remove REACT_APP_FROM_TO from env variables and change README [[8004253](https://github.com/harastaivan/tcup-client/commit/8004253965f42f2598c6c7e76a6eed4d47101b86)]
-   Version 0.6.0 [[b3a4f36](https://github.com/harastaivan/tcup-client/commit/b3a4f36148090c0e0d40ae49b2b609efe2d39917)]
-   Fix homepage for now [[31597cd](https://github.com/harastaivan/tcup-client/commit/31597cde96e6af1009f324e330da5921e8190c36)]
-   Add loading to registration [[6b1f98d](https://github.com/harastaivan/tcup-client/commit/6b1f98d1618797cebaa1b952e89b34c679d1d3bf)]
-   Fix test mode alert text [[48163a7](https://github.com/harastaivan/tcup-client/commit/48163a75633b929dad543eb9de68e946c4b30fec)]
-   Add frontend validation to EditRegistrationForm [[d763612](https://github.com/harastaivan/tcup-client/commit/d7636124c94faf4fdb88fc041749dee465537eef)]
-   Add frontend validation to RegistrationForm [[ba822c3](https://github.com/harastaivan/tcup-client/commit/ba822c3d655ab4fe231c27ff2acbfa497df6dbc3)]
-   Version 0.5.9 [[fef24f2](https://github.com/harastaivan/tcup-client/commit/fef24f253d2c963fd1ba1fdc2a92443624fbe3d1)]
-   Add index of glider in registration form [[68db944](https://github.com/harastaivan/tcup-client/commit/68db9444c02850aa02ef04127d2697a034c70f94)]
-   Version 0.5.8 [[972e6e6](https://github.com/harastaivan/tcup-client/commit/972e6e69e42e9ff2a2283e401cd9f203adca6047)]
-   Save exported file [[3bfede8](https://github.com/harastaivan/tcup-client/commit/3bfede8f6798146d2995899473979cf5f64f314b)]
-   Add formatDate util [[904c5cf](https://github.com/harastaivan/tcup-client/commit/904c5cfd291f1d5291849f97a5e85badf9d50394)]
-   Install file-saver [[af95486](https://github.com/harastaivan/tcup-client/commit/af95486c7915b38875262c1ba01ca4c9deb52f2f)]
-   Create export přihlášek &lt;Button /&gt; [[6de433d](https://github.com/harastaivan/tcup-client/commit/6de433d8560a8a4f78da094ec0f7f9a1d9172e2a)]
-   Create exportRegistrations action [[7be87e8](https://github.com/harastaivan/tcup-client/commit/7be87e8ea7ce97bcc872e4a847a7e9b136c7a83e)]
-   Create EXPORT_REGISTRATIONS action type [[4ae038f](https://github.com/harastaivan/tcup-client/commit/4ae038f8a960386b22c62c65770bbbd345246f7a)]
-   Version 0.5.7 [[26bfe3a](https://github.com/harastaivan/tcup-client/commit/26bfe3a03fb33ef50e585ceebf3e664d30de3280)]
-   Add markPaid button to StartingList [[9feea3e](https://github.com/harastaivan/tcup-client/commit/9feea3e01fd2cb45d454f91aac94b33515684305)]
-   Change buttons to small [[46cd7a5](https://github.com/harastaivan/tcup-client/commit/46cd7a5c3a6092319e69dad61c7a777da82d00d1)]
-   Create markPaid action [[e67033c](https://github.com/harastaivan/tcup-client/commit/e67033cb5d74d758fede2c95e64a7debe7cf32f0)]
-   Create reducer [[b3c36ff](https://github.com/harastaivan/tcup-client/commit/b3c36ffb5a179d844eafdefd4f3b2e0183b51a94)]
-   Create PAY_REGISTRATION type [[d1ae839](https://github.com/harastaivan/tcup-client/commit/d1ae839e39c2b80afa7057840a8e9c6640b5c74a)]
-   Implement edit registration [[8970c37](https://github.com/harastaivan/tcup-client/commit/8970c37f10afce9d9b010a6e3ecbbcedff050c1b)]
-   Version 0.5.5 [[861c0be](https://github.com/harastaivan/tcup-client/commit/861c0bef89c6c64d038b1a75cfae2bae9c8f7f53)]
-   Remove buttons when mobile [[e0f08ea](https://github.com/harastaivan/tcup-client/commit/e0f08ea9f6b14f995e4b6afa9999a3fdd47f4881)]
-   Only admin can see add news and delete news [[c2a50dd](https://github.com/harastaivan/tcup-client/commit/c2a50ddbb0790d0264af4067287d6195fdb78a2b)]
-   Only admin can see add document and delete document [[3dfc0c0](https://github.com/harastaivan/tcup-client/commit/3dfc0c0213b4df11775a589f7b3dab30300e3718)]
-   Add isAdmin into auth reducer [[cc82ca0](https://github.com/harastaivan/tcup-client/commit/cc82ca0061d02730aa007e0b5502f9706c4a2369)]
-   Render startingList component from redux startingList store [[859104c](https://github.com/harastaivan/tcup-client/commit/859104ce948ac49dc279798ee52d0ba1e7621985)]
-   Create startingList actions [[c228bcb](https://github.com/harastaivan/tcup-client/commit/c228bcb6ce2e52e572cc634cf8fe52ef3fbacc6b)]
-   Create startingList reducer [[535e466](https://github.com/harastaivan/tcup-client/commit/535e466a552943643c9f32ee5d69aeddc2284ea4)]
-   Remove disabled at /starting-list Link [[65528cf](https://github.com/harastaivan/tcup-client/commit/65528cf6ea15912c57a9a4e992c2f47c7d620f21)]
-   Fix errors in browser [[87dbbd0](https://github.com/harastaivan/tcup-client/commit/87dbbd02b32d4c4f1ec78651b4711b9ee26f17a4)]
-   Version 0.5.1 [[3e9e77e](https://github.com/harastaivan/tcup-client/commit/3e9e77e09b43b0ce99539d0c0901a121078a9a33)]
-   Add script for checking format and add it to Circle CI [[00bb8e0](https://github.com/harastaivan/tcup-client/commit/00bb8e0c7ff7127c6ad4e4ed4c15db2ea774b497)]
-   Format all code properly [[022d126](https://github.com/harastaivan/tcup-client/commit/022d126de19c5f49a0f0b404a8b71b750596861c)]
-   Install prettier [[ccab703](https://github.com/harastaivan/tcup-client/commit/ccab703732a8e41c290df39bf099bd9018ace7ca)]
-   Use yarn instead of npm [[8b9c2d7](https://github.com/harastaivan/tcup-client/commit/8b9c2d75421077635f0d0fd8395782729f3a4d34)]
-   Add lint to circle CI [[22c8b05](https://github.com/harastaivan/tcup-client/commit/22c8b050b4d011b4dc9d4fbbbd6e09ca8232e475)]
-   Fix refactoring error [[3a6714d](https://github.com/harastaivan/tcup-client/commit/3a6714d5f00bf57562c4967307e767e4c5ffaee1)]
-   Fix eslint errors [[647e03d](https://github.com/harastaivan/tcup-client/commit/647e03defb81f75947b7807930a7180e1e74c6f0)]
-   Remove service worker [[2005deb](https://github.com/harastaivan/tcup-client/commit/2005deb542dc43cb0ef2459882f0166a3de61a17)]
-   Delete eslint because its dependent on react [[bf89367](https://github.com/harastaivan/tcup-client/commit/bf893678501420556aadce2fb3e50d87e7b02b91)]
-   Install and configure eslint [[cc20eae](https://github.com/harastaivan/tcup-client/commit/cc20eae198c20791d55bd77ca232617527444b17)]
-   Version 0.5.0 [[abbdf4c](https://github.com/harastaivan/tcup-client/commit/abbdf4cb8906416811f4e3c50220423217c0eb0f)]
-   Modify Documents and AddDocument components [[d1d4268](https://github.com/harastaivan/tcup-client/commit/d1d42689957b4691e1abff934ffec78ed56c7d34)]
-   Create utility which converts numerical file size to human-readable string [[5f311c7](https://github.com/harastaivan/tcup-client/commit/5f311c714610878530569ff030b93cb621378714)]
-   Create document actions [[65aca76](https://github.com/harastaivan/tcup-client/commit/65aca76f92f9872a07ac05babc5d1fda2de9e2c0)]
-   Create document reducer [[dce88b8](https://github.com/harastaivan/tcup-client/commit/dce88b85f85c4437bf679345d52bbc56b65d81cb)]
-   Add documents types [[4e76dca](https://github.com/harastaivan/tcup-client/commit/4e76dcad6d9804e2562eb245c7fce36a73ea7910)]
-   Fix error.toJSON is not a function in else condition [[2c6f69e](https://github.com/harastaivan/tcup-client/commit/2c6f69eabe4748ba7818e4ab11eff5bd6a7e131d)]
-   Add optional contentType in tokenConfig [[1b82017](https://github.com/harastaivan/tcup-client/commit/1b82017a4de13b25aef46aa8a074547a78092096)]
-   Documents cancel disabled [[550144c](https://github.com/harastaivan/tcup-client/commit/550144c2430c70e0d9d7282fdf2e58f9528cbcda)]
-   Use npm instead yarn in circleci config [[f195f91](https://github.com/harastaivan/tcup-client/commit/f195f913697c0344d32d009b6820bbb82300c0db)]
-   Disable not implemented NavLinks [[26f9ab8](https://github.com/harastaivan/tcup-client/commit/26f9ab83de6ed520267b76be2820c71d8737f71e)]
-   Update favicon [[3c78d1a](https://github.com/harastaivan/tcup-client/commit/3c78d1afb9024058e23c75085758333ddea85ab6)]
-   Update favicon [[f84b21b](https://github.com/harastaivan/tcup-client/commit/f84b21b0bc1dc1a1ce0afdcc4539cf1b7ecf5eed)]
-   Replace env variable version [[aaf9edb](https://github.com/harastaivan/tcup-client/commit/aaf9edb44ac4b7fb8bdd9c943f9ffdddf0146461)]
-   Small fix [[fb16ed6](https://github.com/harastaivan/tcup-client/commit/fb16ed6288500e7ee6b68313690c3702d78f0dff)]
-   Small fixes [[86e5c78](https://github.com/harastaivan/tcup-client/commit/86e5c78eca1da7ffd3a7b720ee5e53c5b059ee8e)]
-   Fix landing page, img was fucked hard [[b5af6f4](https://github.com/harastaivan/tcup-client/commit/b5af6f44cc3151b7f8445023d2a3f8fb22f78aea)]
-   Show contacts based on JSON [[f89194d](https://github.com/harastaivan/tcup-client/commit/f89194d5d6160997c3489aea94baa0a6b617bb0c)]
-   Implement home page [[f1cecfe](https://github.com/harastaivan/tcup-client/commit/f1cecfee24ba9c3669f3749107a7706fa39676e7)]
-   Add prettierrc [[c98d3de](https://github.com/harastaivan/tcup-client/commit/c98d3defc93288594940a582b67b8fbb7ecb4753)]
-   Load registration when component did mount [[0f416cb](https://github.com/harastaivan/tcup-client/commit/0f416cb9a32f4e78e97234f4f5c7dfcb9f0617c7)]
-   Fix infinite calling of getRegistration [[f77b27f](https://github.com/harastaivan/tcup-client/commit/f77b27f9a1c4874c33a75ed3f1adf7a2b7f6c665)]
-   Fix warnings [[6a2baeb](https://github.com/harastaivan/tcup-client/commit/6a2baebd03477f66ca0b5854dc2a8e3814351295)]
-   When user is registered show his registration [[fd47c10](https://github.com/harastaivan/tcup-client/commit/fd47c102fc878b9d9ef841aa0d786c22c1aa87c2)]
-   Fix showing if user has registration or not [[42487ed](https://github.com/harastaivan/tcup-client/commit/42487ed87acf9b267cdac354758a0cb3b6194b09)]
-   Get registration action [[ab89992](https://github.com/harastaivan/tcup-client/commit/ab899926483d46d33cc1ad125d0ce6fb4338aedb)]
-   Submit registration endpoint [[d9dc850](https://github.com/harastaivan/tcup-client/commit/d9dc850e4dd52d5d2592d2ed6e5ac03a18152ab2)]
-   Render form for registration [[24a6937](https://github.com/harastaivan/tcup-client/commit/24a693760f47f75a976985c2bf05671eed792f56)]
-   Add useful Alerts [[78cf61b](https://github.com/harastaivan/tcup-client/commit/78cf61bb7defc70e65fde8a9796258f527611965)]
-   Update package.json [[747a986](https://github.com/harastaivan/tcup-client/commit/747a9862f9d28411d7d8a4fd14909c38fa257fe9)]
-   Fix env variables [[121708e](https://github.com/harastaivan/tcup-client/commit/121708e1e6b0997180451aed82d0e978ffe5796d)]
-   Add nyc [[2bf3995](https://github.com/harastaivan/tcup-client/commit/2bf39957eab325fa5c370d970e36980968d22a4c)]
-   Actually add config file [[e4450d1](https://github.com/harastaivan/tcup-client/commit/e4450d143444a9f108d72076832a335413a2aff9)]
-   Add config file [[c9c39b0](https://github.com/harastaivan/tcup-client/commit/c9c39b0d72dc6cd01e1c2e13b78fb308ee5fd59d)]
-   Remove proxy, add API_ENDPOINT to .env and change error handling [[7c9d7be](https://github.com/harastaivan/tcup-client/commit/7c9d7bee64f1019ef1bf6474e4baf4bbc40f9dab)]
-   Move this project from tcup-server [[4af9c15](https://github.com/harastaivan/tcup-client/commit/4af9c155e8bb0bdf3e33f03847cc9fade0d3c653)]
