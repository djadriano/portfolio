<script>
  import { Intro } from '@components/Intro/Index.js';
  import { PageTitle } from '@components/PageTitle/Index.js';
  import { LinksList } from '@components/LinksList/Index.js';
  import CasesData from '@data/cases.json';
  import PersonalData from '@data/personal.json';
</script>

<Intro />
<section>
  <PageTitle />
  <LinksList links="{CasesData.data}" />
</section>
<section>
  <PageTitle title="Personal" />
  <LinksList links="{PersonalData.data}" />
</section>
