const fetch = require(`node-fetch`);
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  const result = await fetch(
    `https://sandbox.movinganalytics.com/test/indicators`
  );
  const resultData = await result.json();
  createNode({
    id: `example-data`,
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData)
    },
    data: resultData
  });
};
