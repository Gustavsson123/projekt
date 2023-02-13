import mysql from 'mysql2/promise';

export default async function handler(req: any, res: any) {
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "test",
        user: "root",
    });

    try {
        const query = "SELECT * FROM `f__rteckning_stuns_street_maps_stories_och_projekt___blad1` ";
        const values: any[] = [];
        const [result] = await dbconnection.execute(query, values);
        res.status(200).json(result);
        dbconnection.end();
    }

    catch (error: unknown) {
        res.status(500).json({ error: error as Error });
    }
}
