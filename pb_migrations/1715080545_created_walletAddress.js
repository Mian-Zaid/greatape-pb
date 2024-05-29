/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lglzckuvfx38oku",
    "created": "2024-05-07 11:15:45.228Z",
    "updated": "2024-05-07 11:15:45.228Z",
    "name": "walletAddress",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pmwvkf0c",
        "name": "walletAddress",
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
  const collection = dao.findCollectionByNameOrId("lglzckuvfx38oku");

  return dao.deleteCollection(collection);
})
