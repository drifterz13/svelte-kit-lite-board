-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "tasklistId" INTEGER NOT NULL,
    CONSTRAINT "Task_tasklistId_fkey" FOREIGN KEY ("tasklistId") REFERENCES "Tasklist" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("completed", "id", "tasklistId", "title") SELECT "completed", "id", "tasklistId", "title" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE TABLE "new_Tasklist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Tasklist_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Tasklist" ("id", "projectId", "title") SELECT "id", "projectId", "title" FROM "Tasklist";
DROP TABLE "Tasklist";
ALTER TABLE "new_Tasklist" RENAME TO "Tasklist";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
