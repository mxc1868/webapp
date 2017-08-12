const stitch = require("mongodb-stitch")
const client = new stitch.StitchClient('todolist-qaezf');
const db = client.service('mongodb', 'mongodb-atlas').db('webapp');
client.login().then(() =>
  db.collection('todo').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
).then(() =>
  db.collection('todo').find({owner_id: client.authedId()})
).then(docs => {
  console.log("Found docs", docs)
  console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
  console.error(err)
});