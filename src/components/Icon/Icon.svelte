<script>
  export let data = '';
  export let className = 'icon';
  export let viewBox = '0 0 20 20';
  export let size = '';
  export let width = size;
  export let height = size;
  export let color = 'currentColor';
  export let stroke = 'transparent';
  export let fill = color;
  $: elements = data.replace(/<svg ([^>]*)>/, '').replace('</svg>', '');
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="{className}"
  {width}
  {height}
  {viewBox}
  {stroke}
  {fill}>
  {@html elements}
</svg>
