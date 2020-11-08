const linkPreviewGenerator = require('link-preview-generator');

const previewData = async (req, res) => {
	try {
		const preview = await linkPreviewGenerator(
			`https://en.wikipedia.org/wiki/${req.params.country}`
		);
		res.send(preview.img);
	} catch (e) {
		res.status(500).send({ message: e.message });
	}
};

module.exports = previewData;
