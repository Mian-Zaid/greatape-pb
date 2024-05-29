/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp75cvsuzji75jp")

  // remove
  collection.schema.removeField("zb1p0piw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8drzvsgi",
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
  const collection = dao.findCollectionByNameOrId("kp75cvsuzji75jp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zb1p0piw",
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
  collection.schema.removeField("8drzvsgi")

  return dao.saveCollection(collection)
})
