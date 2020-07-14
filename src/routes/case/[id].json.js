import cases from '@data/cases/list.json';

const lookup = new Map();

cases.data.forEach((item) => {
  lookup.set(item.permalink, JSON.stringify(item));
});

export function get(req, res) {
  // the `id` parameter is available because
  // this file is called [id].json.js
  const { id } = req.params;

  if (lookup.has(id)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(lookup.get(id));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
