// github api
// octokit

// TODO auth
const octokit = new Octokit({ auth: `personal-access-token123` });

// octokit api create issues
await octokit.rest.issues.create({
  owner: "daocaoren",
  repo: "",
  title: "Hello world from " + slug,
});