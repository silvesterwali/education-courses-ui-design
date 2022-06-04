<template>
  <b-container class="mb-5 mt-1">
    <b-row class="mt-3">
      <b-col cols="12" lg="4" md="4" sm="12" order-lg="last" order-md="last">
        <b-card class="rounded-lg mt-3">
          <h3 class="mb-3">Homework progress</h3>
          <b-card bg-variant="primary" class="text-white rounded-lg mt-1">
            <div class="d-flex flex-row align-items-center">
              <div>
                <client-only>
                  <vue-ellipse-progress
                    :progress="25"
                    :size="45"
                    :thickness="5"
                    color="white"
                  >
                  </vue-ellipse-progress>
                </client-only>
              </div>
              <div class="d-flex flex-column mx-auto">
                <span class="mb-0">Data with Python</span>
                <span class="mt-0 text-sm">5 lessons</span>
              </div>
              <div>
                <b-icon-chevron-right />
              </div>
            </div>
          </b-card>
          <b-card bg-variant="light" class="rounded-lg mt-2">
            <div class="d-flex flex-row align-items-center">
              <div>
                <client-only>
                  <vue-ellipse-progress
                    :progress="50"
                    :size="45"
                    :thickness="5"
                    color="#725cff"
                  >
                  </vue-ellipse-progress>
                </client-only>
              </div>
              <div class="d-flex flex-column mx-auto">
                <span class="mb-0 font-weight-bold">Code Foundation</span>
                <span class="mt-0 text-sm font-weight-thin text-secondary"
                  >15 lessons</span
                >
              </div>
              <div>
                <b-icon-chevron-right />
              </div>
            </div>
          </b-card>
          <b-card bg-variant="light" class="rounded-lg mt-2">
            <div class="d-flex flex-row align-items-center">
              <div>
                <client-only>
                  <vue-ellipse-progress
                    :progress="25"
                    :size="45"
                    :thickness="5"
                    color="#081131"
                  >
                  </vue-ellipse-progress>
                </client-only>
              </div>
              <div class="d-flex flex-column mx-auto">
                <span class="mb-0 font-weight-bold">Styling with CSS</span>
                <span class="mt-0 text-sm text-secondary">13 lessons</span>
              </div>
              <div>
                <b-icon-chevron-right />
              </div>
            </div>
          </b-card>

          <b-card bg-variant="light" class="rounded-lg mt-2">
            <div class="d-flex flex-row align-items-center">
              <div>
                <client-only>
                  <vue-ellipse-progress
                    :progress="50"
                    :size="45"
                    :thickness="5"
                    color="#725cff"
                  >
                  </vue-ellipse-progress>
                </client-only>
              </div>
              <div class="d-flex flex-column mx-auto">
                <span class="mb-0 font-weight-bold">Code Foundation</span>
                <span class="mt-0 text-sm font-weight-thin text-secondary"
                  >15 lessons</span
                >
              </div>
              <div>
                <b-icon-chevron-right />
              </div>
            </div>
          </b-card>
        </b-card>
        <b-card class="mt-3 rounded-lg">
          <h3 class="mb-3">Todayes Location</h3>
          <b-card bg-variant="light" class="rounded-lg mt-2">
            <div class="d-flex flex-row align-items-center">
              <div>
                <b-button size="lg" variant="primary">
                  <b-icon-calendar scale="1" />
                </b-button>
              </div>
              <div class="p-1 d-flex flex-column mx-auto">
                <span
                  class="mb-0 font-weight-thin text-se"
                  style="font-size: 11px"
                  >September 20th,2020</span
                >
                <span class="mt-0 text-sm font-weight-bold">13:30-14:30</span>
              </div>
              <div>
                <b-form-checkbox name="check-button" size="lg" switch>
                </b-form-checkbox>
              </div>
            </div>
          </b-card>
          <b-card bg-variant="light" class="rounded-lg mt-2">
            <div class="d-flex flex-row align-items-center">
              <div>
                <b-button size="lg" variant="danger">
                  <b-icon-pin-map scale="1" />
                </b-button>
              </div>
              <div class="p-1 d-flex flex-column mx-auto">
                <span
                  class="mb-0 font-weight-thin text-se"
                  style="font-size: 11px"
                  >Location</span
                >
                <span class="mt-0 text-sm font-weight-bold">Denpasar</span>
              </div>
              <div>
                <b-form-checkbox name="check-button" size="lg" switch>
                </b-form-checkbox>
              </div>
            </div>
          </b-card>
          <b-card bg-variant="light" class="rounded-lg mt-2">
            <div class="d-flex flex-row align-items-center">
              <div>
                <b-button size="lg" variant="primary">
                  <b-icon-camera-video scale="1" />
                </b-button>
              </div>
              <div class="p-1 d-flex flex-column mx-auto">
                <span
                  class="mb-0 font-weight-thin text-se"
                  style="font-size: 11px"
                  >Accept Video</span
                >
                <span class="mt-0 text-sm font-weight-bold">Everyone</span>
              </div>
              <div>
                <b-form-checkbox name="check-button" size="lg" switch>
                </b-form-checkbox>
              </div>
            </div>
          </b-card>
        </b-card>
      </b-col>
      <b-col cols="12" lg="8" md="8" sm="12">
        <b-card class="rounded-lg mt-3">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>All Courses</h2>
            <div class="text-secondary">
              View All
              <b-icon-chevron-right scale="1" variant="secondary" />
            </div>
          </div>
          <b-table borderless :items="items" :fields="fields" responsive>
            <template #cell(cheatsheet_name)="{ item }">
              <div class="d-flex flex-row">
                <div>
                  <b-avatar
                    square
                    :src="item.lesson.image"
                    rounded
                    variant="white"
                  ></b-avatar>
                </div>
                <div class="d-flex flex-column ml-3">
                  <span class="font-weight-bold">{{ item.lesson.title }}</span>
                  <span class="text-secondary">{{ item.lesson.lesson }}</span>
                </div>
              </div>
            </template>
          </b-table>
        </b-card>
        <b-card class="rounded-lg mt-3">
          <div class="d-flex justify-content-between align-items-center">
            <h4>Top Tutors</h4>
            <b-icon-three-dots scale="1.5" variant="secondary" />
          </div>
          <b-row class="mt-3">
            <b-col cols="12" lg="6" md="6" sm="6" class="p-2">
              <b-card class="rounded-lg" bg-variant="light">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <b-img
                      :src="require('~/assets/image/avatar/avatar1.png')"
                      alt="avatar"
                    ></b-img>
                  </div>
                  <div class="d-flex flex-column mr-auto ml-2">
                    <span class="font-weight-bold">Melanie Grutt</span>
                    <span class="text-secondary">@melgrutt</span>
                  </div>
                  <div>
                    <b-button pill size="sm bg-white text-secondary border-0">
                      <b-icon-plus />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
            <b-col cols="12" lg="6" md="6" sm="6" class="p-2">
              <b-card class="rounded-lg" bg-variant="light">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <b-img
                      :src="require('~/assets/image/avatar/avatar2.png')"
                      alt="avatar"
                    ></b-img>
                  </div>
                  <div class="d-flex flex-column mr-auto ml-2">
                    <span class="font-weight-bold">Keira danlop</span>
                    <span class="text-secondary">@danlop.edu</span>
                  </div>
                  <div>
                    <b-button pill size="sm bg-white text-secondary border-0">
                      <b-icon-plus />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
            <b-col cols="12" lg="6" md="6" sm="6" class="p-2">
              <b-card class="rounded-lg" bg-variant="light">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <b-img
                      :src="require('~/assets/image/avatar/avatar2.png')"
                      alt="avatar"
                    ></b-img>
                  </div>
                  <div class="d-flex flex-column mr-auto ml-2">
                    <span class="font-weight-bold">Keira danlop</span>
                    <span class="text-secondary">@danlop.edu</span>
                  </div>
                  <div>
                    <b-button pill size="sm bg-white text-secondary border-0">
                      <b-icon-plus />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
            <b-col cols="12" lg="6" md="6" sm="6" class="p-2">
              <b-card class="rounded-lg" bg-variant="light">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <b-img
                      :src="require('~/assets/image/avatar/avatar2.png')"
                      alt="avatar"
                    ></b-img>
                  </div>
                  <div class="d-flex flex-column mr-auto ml-2">
                    <span class="font-weight-bold">Keira danlop</span>
                    <span class="text-secondary">@danlop.edu</span>
                  </div>
                  <div>
                    <b-button pill size="sm bg-white text-secondary border-0">
                      <b-icon-plus />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
            <b-col cols="12" lg="6" md="6" sm="6" class="p-2">
              <b-card class="rounded-lg" bg-variant="light">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <b-img
                      :src="require('~/assets/image/avatar/avatar1.png')"
                      alt="avatar"
                    ></b-img>
                  </div>
                  <div class="d-flex flex-column mr-auto ml-2">
                    <span class="font-weight-bold">Melanie Grutt</span>
                    <span class="text-secondary">@melgrutt</span>
                  </div>
                  <div>
                    <b-button pill size="sm bg-white text-secondary border-0">
                      <b-icon-plus />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
            <b-col cols="12" lg="6" md="6" sm="6" class="p-2">
              <b-card class="rounded-lg" bg-variant="light">
                <div class="d-flex flex-row align-items-center">
                  <div>
                    <b-img
                      :src="require('~/assets/image/avatar/avatar1.png')"
                      alt="avatar"
                    ></b-img>
                  </div>
                  <div class="d-flex flex-column mr-auto ml-2">
                    <span class="font-weight-bold">Melanie Grutt</span>
                    <span class="text-secondary">@melgrutt</span>
                  </div>
                  <div>
                    <b-button pill size="sm bg-white text-secondary border-0">
                      <b-icon-plus />
                    </b-button>
                  </div>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  BIconChevronRight,
  BIconCalendar,
  BIconPinMap,
  BIconCameraVideo,
  BIconThreeDots,
  BIconPlus,
} from 'bootstrap-vue'
export default {
  name: 'IndexPage',
  components: {
    BIconChevronRight,
    BIconCalendar,
    BIconPinMap,
    BIconCameraVideo,
    BIconThreeDots,
    BIconPlus,
  },
  data() {
    return {
      fields: ['cheatsheet_name', 'start', 'rate', 'level'],
      items: [
        {
          lesson: {
            image: require('~/assets/image/lesson/lesson1.png'),
            title: 'Basic of Mobile UX',
            lesson: '15 lessons',
          },
          start: 'Feb 24',
          rate: '4.5',
          level: 'Intermediate',
        },
        {
          lesson: {
            image: require('~/assets/image/lesson/lesson2.png'),
            title: 'UX/UI Design',
            lesson: '15 lessons',
          },
          start: 'Feb 24',
          rate: '4.5',
          level: 'Elementary',
        },
        {
          lesson: {
            image: require('~/assets/image/lesson/lesson1.png'),
            title: 'Digital Illustration',
            lesson: '13 lessons',
          },
          start: 'Feb 24',
          rate: '4.8',
          level: 'Intermediate',
        },
        {
          lesson: {
            image: require('~/assets/image/lesson/lesson2.png'),
            title: 'Digital Design Systems',
            lesson: '10 lessons',
          },
          start: 'Apr 5',
          rate: '4.9',
          level: 'Elementary',
        },
      ],
    }
  },
}
</script>
