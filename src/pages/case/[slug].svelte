<script>
import { url, params } from '@sveltech/routify';
export let slug;

slug = $params.slug;
</script>

<h1>Case name: {slug}</h1>