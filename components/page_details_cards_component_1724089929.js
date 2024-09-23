/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1724089929", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-white" style=""><h2 id="details-title" class="text-lg font-semibold mb-5 pl-4" style="" data-mf-new="true">DETAILS</h2> <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm" style=""><li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900" style=""><div class="font-medium text-slate-200 text-slate-400" style="" data-mf-new="true">Unique Designs</div> <div class="text-slate-400" style="" data-mf-new="true">Explore our vast collection of one-of-a-kind hoodie designs, created by talented artists from around the world.</div></li> <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900" style=""><div id="start-date-des-1 text-slate-200 text-slate-400" class="font-medium" style="">Quality Comfort</div> <time id="start-time-des-1" class="text-slate-400" style="" data-mf-new="true">Experience unparalleled comfort with our premium materials and expert craftsmanship, ensuring your hoodie feels as good as it looks.</time></li> <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900"><div id="end-date-des-1 text-slate-200 text-slate-400" class="font-medium">Easy Shopping</div> <time id="end-time-des-1" class="text-slate-400">Browse, customize, and purchase your perfect hoodie with our user-friendly interface and secure checkout process.</time></li></ul></section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

