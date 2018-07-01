let rankTable = [];

const rankList = (scores) => {
  return scores.map(s => rank(s));
}

const rank = (score) => {
  let _rank = 0;
  let _last = 0;
  const f = rankTable.find(s => {
    if (!_last || _last > s) _rank++;
    if (score >= s) return true;
    _last = s;
  });
  return !!f ? _rank : _rank+1;
}

module.exports = (table, scores) => {
  rankTable = table;
  return Array.isArray(scores) ? rankList(scores) : rank(scores);
}