<template>
  <dv-full-screen-container style="background: #333">
    <dv-border-box-1 style="height: 100%">
      <a-affix style="position: absolute; top: 16px; right: 16px">
        <a-button type="primary" szie="small" shape="round" @click="jump('/')">
          back
        </a-button>
      </a-affix>
      <!-- <dv-loading>Loading...</dv-loading> -->
      <a-row :gutter="[20, 10]" type="flex" justify="space-around">
        <a-col>
          <dv-decoration-9
            style="width: 150px; height: 150px; margin-top: 20px"
          >
            66%
          </dv-decoration-9>
        </a-col>
        <a-col>
          <dv-water-level-pond
            :config="waterLevelConfig"
            style="width: 150px; height: 150px; margin-top: 20px"
          />
        </a-col>
        <a-col>
          <dv-charts :option="chartOpt" style="height: 220x; width: 220px" />
        </a-col>
        <a-col>
          <dv-capsule-chart
            :config="capsuleConfig"
            style="width: 300px; height: 200px"
          />
        </a-col>
      </a-row>
      <a-row :gutter="[20, 10]" type="flex" justify="space-around">
        <a-col>
          <a-row>
            <dv-border-box-13 style="padding: 20px">
              <dv-scroll-board
                :config="scrollTable"
                style="width: 500px; height: 220px"
              />
            </dv-border-box-13>
          </a-row>
          <a-row>
            <dv-border-box-13 style="padding: 20px">
              <dv-scroll-board
                :config="scrollTable"
                style="width: 500px; height: 220px"
              />
            </dv-border-box-13>
          </a-row>
        </a-col>
        <a-col>
          <dv-scroll-ranking-board
            :config="scrollRankingConfig"
            style="width: 600px; height: 400px"
          />
        </a-col>
      </a-row>
    </dv-border-box-1>
  </dv-full-screen-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCommon } from "@/utils/common";
import {
  chartOpt,
  capsuleConfig,
  waterLevelConfig,
  scrollTable,
  scrollRankingConfig
} from "./data";

export default defineComponent({
  setup() {
    const { jumpTo: jump } = useCommon();
    return {
      chartOpt,
      capsuleConfig,
      waterLevelConfig,
      scrollTable,
      scrollRankingConfig,
      jump
    };
  }
});
</script>

<style lang="less" scoped>
</style>
