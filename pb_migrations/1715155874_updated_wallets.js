/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lglzckuvfx38oku")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcxka9tq",
    "name": "email",
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
  const collection = dao.findCollectionByNameOrId("lglzckuvfx38oku")

  // remove
  collection.schema.removeField("rcxka9tq")

  return dao.saveCollection(collection)
})
