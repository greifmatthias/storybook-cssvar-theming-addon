const config = (entry = []) => {
  return [...entry, require.resolve("./dist/esm/preset/preview")];
};

const managerEntries = (entry = []) => {
  return [...entry, require.resolve("./dist/esm/preset/manager")];
};

module.exports = {
  managerEntries,
  config,
};
