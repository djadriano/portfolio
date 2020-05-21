<script>
  import { params } from '@sveltech/routify';
  import { PageTitle } from '@components/PageTitle/Index.js';
  import CasesData from '@data/cases.json';
  export let slug;

  slug = $params.slug;
  const caseData = CasesData.data.find(item => item.permalink === slug);
</script>

<main>
  <PageTitle
    title="{caseData.name}"
    subtitle="{caseData.company}"
    date="{caseData.year}" />
  <h1>Case name: {slug}</h1>
</main>
