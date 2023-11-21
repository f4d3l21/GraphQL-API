const db = require('../config/db').pool;

const resolvers = {
    Query: {
        games: async (_, args) => {
            const conn = await db.getConnection();
            try {
                const whereClauses = [];
                if (args.genre) {
                }
                if (args.platform) {
                    whereClauses.push('platform = ' + conn.escape(args.platform));
                }
                if (args.studio) {
                }
                const query = `
                    SELECT * FROM Games ${whereClauses.length ? 'WHERE ' + whereClauses.join(' AND ') : ''}
                `;
                const results = await conn.query(query);
                return results;
            } finally {
                conn.release();
            }
        },
        game: async (_, { id }) => {
            const conn = await db.getConnection();
            try {
                const query = 'SELECT * FROM Games WHERE id = ?';
                const results = await conn.query(query, [id]);
                return results[0];
            } finally {
                conn.release();
            }
        },
        editors: async () => {
            const conn = await db.getConnection();
            try {
                const results = await conn.query('SELECT * FROM Editors');
                return results;
            } finally {
                conn.release();
            }
        },
        editor: async (_, { id }) => {
            const conn = await db.getConnection();
            try {
                const query = 'SELECT * FROM Editors WHERE id = ?';
                const results = await conn.query(query, [id]);
                return results[0];
            } finally {
                conn.release();
            }
        },
        studios: async () => {
            const conn = await db.getConnection();
            try {
                const results = await conn.query('SELECT * FROM Studios');
                return results;
            } finally {
                conn.release();
            }
        },
        studio: async (_, { id }) => {
            const conn = await db.getConnection();
            try {
                const query = 'SELECT * FROM Studios WHERE id = ?';
                const results = await conn.query(query, [id]);
                return results[0];
            } finally {
                conn.release();
            }
        },
    },
    Game: {
        editors: async (game) => {
            const conn = await db.getConnection();
            try {
                const query = `
                    SELECT Editors.* FROM Editors
                    JOIN GameEditor ON Editors.id = GameEditor.editorId
                    WHERE GameEditor.gameId = ?
                `;
                const results = await conn.query(query, [game.id]);
                return results;
            } finally {
                conn.release();
            }
        },
        studios: async (game) => {
            const conn = await db.getConnection();
            try {
                const query = `
                    SELECT Studios.* FROM Studios
                    JOIN GameStudio ON Studios.id = GameStudio.studioId
                    WHERE GameStudio.gameId = ?
                `;
                const results = await conn.query(query, [game.id]);
                return results;
            } finally {
                conn.release();
            }
        },
        genres: async (game) => {
            // Logique pour récupérer les genres d'un jeu
            // Cela dépend de la structure de votre base de données
        },
    },
};

module.exports = resolvers;
