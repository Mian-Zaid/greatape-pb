/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp75cvsuzji75jp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfivn0tf",
    "name": "lastUsed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp75cvsuzji75jp")

  // remove
  collection.schema.removeField("sfivn0tf")

  return dao.saveCollection(collection)
})
