const gitRepoUrl = '';

module.exports = {
  entryPoints: [
    "./src/index.ts",
    "./src/types/index.ts",
  ],
  out: "docs",
  validation: {
    "notExported": true,
    "invalidLink": true,
    "notDocumented": false
  },
  sourceLinkTemplate: `${gitRepoUrl}/files/tip/{path}#L{line}`,
  includeVersion: true,
  sourceLinkExternal: true,
};
