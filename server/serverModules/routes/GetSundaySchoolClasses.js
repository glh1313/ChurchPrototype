/**
 * Sets up the /getsundayschoolclasses URL.
 *
 * @param {Object} app - the application object.
 * @param {Object} config - the configuration object. This
 *                          object may not be needed but is
 *                          passed in for consistency.
 *
 * Note: The app is a single page app using react-router. This
 *       route is just used to serve up the application if it
 *       is requested from {url}/getsundayschoolclasses.
 **/

const offeredClasses = [
    {
        title: "The Message of Colossians & Philemon",
        author: "By Dick Lucas",
        text: [
            "Fullness and freedom--two aspects of Christian life that we all want to share. Paul wrote about them at length (and depth) in his letter to the Christians at Colossae, where certain new teachers were proclaiming that \"mere Christianity\" is not enough. There is, they suggested, a fuller experience, a greater liberation, than they had so far enjoyed. But Paul was adamant: all God's fullness is in Christ alone, and only through his complete work are we set free.",
            "These are the great objective truths of the faith that Dick Lucas highlights in his exposition, enabling us to see both the riches that are ours in Christ and the irrelevance--even blasphemy--of all would-be improvements on what God has done. "
        ],
        imageURL: "/books/image1.jpg",
        id: 1,
        index: 0

    },
    {
        title: "The Blessing of Humility",
        author: "By Jerry Bridges",
        text: [
            "We all admire humility when we see it. But how do we practice it? How does humility—the foundational virtue of the normal Christian life—become a normal part of our everyday lives?",
            "Jerry Bridges sees in the Beatitudes a series of blessings from Jesus, a pattern for humility in action. Starting with poverty in spirit—an acknowledgment that in and of ourselves we are incapable of living holy lives pleasing to God—and proceeding through our mourning over personal sin, our hunger and thirst for righteousness, our experience of persecutions large and small, and more, we discover that humility is itself a blessing: At every turn, God is present to us, giving grace to the humble and lifting us up to blessing."
        ],
        imageURL: "/books/image2.jpg",
        id: 2,
        index: 1
    }
];

function route(app, config) {
    app.get('/getsundayschoolclasses', function (req, res) {
        console.log('We have a request for getsundayschoolclasses.');
        res.json(offeredClasses);
    });
}

module.exports = route;