/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l4l62953e0nzx5x")

  // remove
  collection.schema.removeField("p9g5tpzr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "boi4mr4r",
    "name": "hostId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "aw8ijrwpv0jwl5u",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l4l62953e0nzx5x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p9g5tpzr",
    "name": "userId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("boi4mr4r")

  return dao.saveCollection(collection)
})
