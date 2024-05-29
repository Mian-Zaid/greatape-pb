/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "aw8ijrwpv0jwl5u",
    "created": "2024-02-26 16:17:07.398Z",
    "updated": "2024-02-26 16:17:07.398Z",
    "name": "hosts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p4emseom",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("aw8ijrwpv0jwl5u");

  return dao.deleteCollection(collection);
})
