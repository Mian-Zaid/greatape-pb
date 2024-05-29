/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp75cvsuzji75jp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ivd8scje",
    "name": "fileHash",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp75cvsuzji75jp")

  // remove
  collection.schema.removeField("ivd8scje")

  return dao.saveCollection(collection)
})
