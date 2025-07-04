const fs = require('fs');
const { parse } = require('csv-parse/sync');

module.exports = function() {
  const csvContent = fs.readFileSync('_data/furniture.csv', 'utf8');
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true
  });
  
  return records;
};