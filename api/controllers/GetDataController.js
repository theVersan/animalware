// api/controllers/GetDataController.js

module.exports = {
 
  async getFormResponsesCount(req, res) {
    try {
      const donthavebutwantQuery = 'SELECT * as count FROM donthavebutwant';
      const dontlivedanddontwantQuery = 'SELECT * as count FROM dontlivedanddontwant';
      const haddogsorlivedwithQuery = 'SELECT * as count FROM haddogsorlivedwith';
      const havedogsQuery = 'SELECT * as count FROM havedogs';

      const donthavebutwantCount = await sails.sendNativeQuery(donthavebutwantQuery);
      const dontlivedanddontwantCount = await sails.sendNativeQuery(dontlivedanddontwantQuery);
      const haddogsorlivedwithCount = await sails.sendNativeQuery(haddogsorlivedwithQuery);
      const havedogsCount = await sails.sendNativeQuery(havedogsQuery);

      const responseCounts = {
        donthavebutwant: donthavebutwantCount.rows[0].count,
        dontlivedanddontwant: dontlivedanddontwantCount.rows[0].count,
        haddogsorlivedwith: haddogsorlivedwithCount.rows[0].count,
        havedogs: havedogsCount.rows[0].count
      };

      return res.json(responseCounts);
    } catch (err) {
      return res.serverError(err);
    }
  }

};
