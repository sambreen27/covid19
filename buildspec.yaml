# Do not change version. This is the version of aws buildspec, not the version of your buldspec file.
version: 0.2
phases:
  pre_build:
    commands:
      #installs dependencies into the node_modules/ directory
      - npm install
  build:
    commands:
      - echo Build started on `date`
      - echo Compiling
      - npm run build
  post_build:
    commands:
      - echo Build completed on `date`
# Include only the files required for your application to run.
artifacts:
  files:
    - public/**/*
    - src/**/*
    - package.json
    - appspec.yml
    - scripts/**/*
