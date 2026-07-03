const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    // Get input
    const tag = process.env.TAG || process.env.INPUT_TAG || "";
    const repoInput = core.getInput("repo") || process.env.GITHUB_REPOSITORY || "";

    if (!tag) {
      throw new Error("No tag was specified!");
    }

    console.log(`Searching for tag: ${tag} in ${repoInput}`);

    if (!repoInput.includes("/")) {
      throw new Error(`${repoInput} is not a valid repo`);
    }

    // Get owner and repo from context of payload that triggered the action
    const [owner, ...repository] = repoInput.split("/");
    const repo = repository.join("/");

    const octokit = github.getOctokit(
      process.env.GITHUB_TOKEN || core.getInput("github_token")
    );
    var exists = "false";

    try {
      const response = await octokit.rest.git.getRef({
        owner,
        repo,
        ref: `tags/${tag}`
      });

      if (response.status === 200) {
        console.log("Tag was found");
        exists = "true";
      } else {
        core.setFailed("Unexpected status was returned: " + response.status);
        return;
      }
    } catch (error) {
      if (error.status === 404) {
        console.log("Tag was not found");
      } else {
        core.setFailed(`Unexpected status was returned: ${error.status}: ${error.message}`);
        console.error(error);
        return;
      }
    }

    core.setOutput("exists", exists);

  } catch (error) {
    core.setFailed(error.message);
    console.error(error);
  }
}

run();
