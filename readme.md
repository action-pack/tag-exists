<h1 align="center">Tag Exists<br />
<div align="center">
  
  [![Build](https://github.com/action-pack/tag-exists/actions/workflows/build.yml/badge.svg)](https://github.com/action-pack/tag-exists/)
  [![Version](https://img.shields.io/github/v/tag/action-pack/tag-exists?label=version&sort=semver&color=066da5)](https://github.com/marketplace/actions/tag-exists)
  [![Size](https://img.shields.io/github/size/action-pack/tag-exists/dist/index.js?branch=release/v1.02&label=size&color=066da5)](https://github.com/action-pack/tag-exists/)
  
</div></h1>

Action to determine if a tag exists.

## Usage 🚀

To check if a tag named `example` exists in your current repository:

```yaml
- uses: action-pack/tag-exists@v1
  id: check
  with: 
    tag: 'example'

- run: echo ${{ steps.check.outputs.exists }}
```

## Inputs 📝

  ### `tag` 

  **Required** - The tag to search for.

  ### `repo`

  **Optional** - External repository name in`owner/repo` format.

## Outputs 📝

  ### `exists`

  A string value of 'true' or 'false'

## Stars 🌟
[![Stars](https://starchart.cc/action-pack/tag-exists.svg?variant=adaptive)](https://starchart.cc/action-pack/tag-exists)
