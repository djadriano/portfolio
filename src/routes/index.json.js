import cases from '@data/cases/list.json';

const contents = JSON.stringify(
  cases.data.map((item) => {
    return {
      name: item.name,
      company: item.company,
      permalink: item.permalink,
      year: item.year,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
