<img src="sources/frontend/src/assets/logo-horizontal.svg" width="500px"/>

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ddadaal/AcademyCloud/frontend%20build%20and%20deploy?label=frontend%20build%20and%20deploy&style=flat-square)

AcademyCloud is a public IaaS cloud that is:

- designed for educational institutions
- built on OpenStack
- also my undergraduate graduation project


[Opening Proposal](docs/research-proposal.md)

# Demo

https://academycloud.ddadaal.me

All mock data running at frontend. No API call is involved.

Use username `system` and any password to login as **system user**.

Use any other username and any password to login as a **normal user** with all possible scopes available.

# Contents

- [reports](/reports)
  - daily and periodic reports
- [preparation](/preparation)
  - preparation works
- [openstack](/openstack)
  - OpenStack dpeloyment scripts
- [documentations](/docs)
  - [important talks between me and mentor](docs/important-talks.md)
- [sources](/sources)
  - [backend](sources/backend)
    - Microservices communicating with each other by `gRPC`
    - `C# ASP.NET Core 3.1` used in 2 microservices + 1 API Gateway
    - `Python` used in 1 microservices
    - `consul` for service registration and discovery
    - `registrator` to automatically register containers when up and de-register when down
    - `docker-compose` for dev environment 
  - [frontend](sources/frontend)
    - `React` + `TypeScript` + `ant-design`
    - complete mock data for backend-less development
    - self-made [simstate](https://github.com/ddadaal/simstate) for state management
    - self-made **i18n solution** based on simstate
    - **All hooks** projects with no use of class components whatsoever

## Progress

Development starts from **01/28**.

- [x] Requirement Analysis (initial version ended at around **02/12**, result: [0211-requirements.md](docs/requirements/0211-requirements.md))
- [x] Design (initial version ended at around **02/19**, artifact: [Domain Models and System Architecture](docs/architecture))
- [x] Development and unit test
    - [x] Identity module (ended at **02/28**)
    - [x] Expenses module (ended at **03/13**)
    - [x] Resources module (ended at **03/18**)
- [x] Integration test and Paper Writing (ended at **04/02**)
- [ ] Revise the paper with tutors


## License

Nothing from this project shall be used until my graduation.
