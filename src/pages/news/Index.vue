<template>
  <div class="page-news container border rounded shadow-lg px-2 py-6">
    <UtilityHeadline
      :title-text="headline.title"
      :title-position="'center'"
      :superscript-text="headline.superscript"
      :superscript-background-color="'black'"
    />
    <div class="page-news__content d-md-flex gap-4 my-6 t1 text-black">
      <div class="page-news__content__block-1 flex-1">
        <div class="h3" v-html="paragraph.first.title" />
        <div class="t8 text-gray-darker text-end">
          {{ paragraph.first.contributions }}
        </div>
        <div class="border border-dark rounded shadow my-2">
          <img src="@/assets/news/news-image-1.png" class="img-fluid" />
        </div>
        <UtilityParagraph
          :text="paragraph.first.content[0]"
          :text-size="'sm'"
          :first-letter-shadow-color="paragraph.first.firstLetterColor"
        />
        <UtilityParagraph
          :text="paragraph.first.content[1]"
          :text-size="'sm'"
          :first-letter-shadow-color="paragraph.first.firstLetterColor"
        />
      </div>
      <div class="page-news__content__block-2">
        <div class="border-bottom border-dark mb-2">
          <UtilityContainer :title="'AD'" :background-color="'#d6ab69'">
            <template #content>
              <div class="h5">{{ ad.title }}</div>
              <div class="my-2">
                <img src="@/assets/news/ad.png" class="img-fluid" />
              </div>
              <div class="t6" v-for="(text, index) in ad.text" :key="index">
                ★ {{ text }}
              </div>
            </template>
          </UtilityContainer>
        </div>
        <div class="h3" v-html="paragraph.second.title" />
        <div class="t8 text-gray-darker text-end">
          {{ paragraph.second.contributions }}
        </div>
        <div class="page-news__content__block-2__image my-2 text-center">
          <img src="@/assets/news/news-image-2.png" />
        </div>
        <UtilityParagraph
          :text="paragraph.second.content[0]"
          :text-size="'sm'"
        />
        <div class="t5">{{ paragraph.second.content[1] }}</div>
      </div>
      <div class="page-news__content__block-3">
        <div class="h3" v-html="jobOpportunities.title" />
        <div
          class="page-news__content__block-3__image my-2 text-center position-relative border border-dark rounded shadow"
        >
          <img src="@/assets/news/news-image-3.png" class="img-fluid" />
          <div class="text h4 w-100 position-absolute">
            {{ jobOpportunities.imageText }}
          </div>
        </div>
        <UtilityOrderedList :contents="jobOpportunities.options" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  UtilityHeadline,
  UtilityOrderedList,
  UtilityParagraph,
  UtilityContainer,
} from "vue2-components";

export default {
  name: "PageNews",
  components: {
    UtilityHeadline,
    UtilityOrderedList,
    UtilityParagraph,
    UtilityContainer,
  },
  data() {
    return {
      headline: {
        title: "The best skills to have on your resume",
        superscript:
          "New YorkCNN — Writing a good resume is a tricky balancing act.",
      },
      paragraph: {
        first: {
          title:
            "Black Friday shoppers spent a record $9.8 billion in U.S.<br> online sales, up 7.5% from last year",
          content: [
            "Black Friday e-commerce spending popped 7.5% from a year earlier, reaching a record $9.8 billion in the U.S., according to an Adobe Analytics report, a further indication that price-conscious consumers want to spend on the best deals and are hunting for those deals online. “We’ve seen a very strategic consumer emerge over the past year where they’re really trying to take advantage of these marquee days, so that they can maximize on discounts,” said Vivek Pandya, a lead analyst at Adobe Digital Insights. Black Friday’s spending spike reflects a consumer who is more willing to spend than in 2022, when gas and food prices were painfully high.",
            "Pandya noted that impulse purchases may have played a role in the Black Friday growth since $5.3 billion of the online sales came from mobile shopping. He noted that influencers and social media advertising have made it easier for consumers to get comfortable spending on their mobile devices. Still, shoppers are price-sensitive, managing tighter budgets due to last year’s record inflation and interest rates. According to the Adobe survey, $79 million of the sales came from consumers who opted for the ‘Buy Now, Pay Later’ flexible payment method to stretch their wallets, up 47% from last year.",
          ],
          firstLetterColor: "#ff962d",
          contributions: "—— By Rebecca Picciotto",
        },
        second: {
          title: "All the new Disney movies coming out in the next few years",
          content: [
            "There are tons of new Disney movies on the way, which means keeping track of everything in the works can be difficult. Just this year we've seen the likes of Elemental, Indiana Jones and the Dial of Destiny, The Little Mermaid, and Haunted Mansion – and there's still new Disney Princess movie Wish yet to hit theaters, with Taika Waitit's Next Goal Wins also still to come.",
            "Beyond that, there's everything from Frozen 3 to Toy Story 5, a live-action Moana, and much more besides. But, there have been a couple of delays, with the live-action Snow White and new Pixar movie Elio both shuffled back from 2024 to 2025.",
          ],
          contributions: "—— By Sam Loveridge",
        },
      },
      ad: {
        title: "2024 Porsche Panamera Debuts with More Tech and Up to 670 HP",
        text: [
          "The 2024 Porsche Panamera debuts with more power, revised styling, an updated cabin, and improved entertainment and safety technology.",
          "Entry-level Panameras feature a 348-hp turbocharged V-6, while the 670-hp Turbo E-Hybrid sports a twin-turbo V-8, a more powerful electric motor, and a larger battery pack.",
          "Optional on the Turbo E-Hybrid is an active suspension that can lean into corners and raise the body for easier entry and exit.",
        ],
      },
      jobOpportunities: {
        title: "Job Opportunities with the Following Companies",
        imageText: "Career Openings Here",
        options: [
          {
            title: "Web Developer",
            content:
              "Exciting role in web development, creating innovative digital experiences.",
            url: "demo",
          },
          {
            title: "Marketing Coordinator",
            content:
              "Join our dynamic team, contribute to strategic marketing initiatives.",
          },
          {
            title: "Data Analyst",
            content:
              "Analyze and interpret complex data sets, drive informed business decisions.",
            url: "demo",
          },
          {
            title: "Graphic Designer",
            content:
              "Unleash your creativity, design visually stunning graphics and layouts.",
          },
        ],
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
$theme-bg: #d5ab69;
.page-news {
  background-image: url("assets/news/bg.png");
  background-size: 150% 120%;
  background-position: center;
  background-color: $theme-bg;
  min-height: 100vh;

  &__content {
    > div {
      @include media-breakpoint-up(md) {
        flex: 0 0 33%;
        max-width: calc(33% - 8px);
      }
    }

    &__block-2 {
      &__image img {
        width: 50%;
      }
    }

    &__block-3 {
      &__image {
        img {
          filter: sepia(1);
        }
        .text {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
