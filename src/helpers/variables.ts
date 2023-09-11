/**
 * FontSize
 */
import {
  AlarmIcon,
  Dashbackwash,
  DashboardIcon,
  Dashfeedpump,
  Dashpower,
  Dashwaterlevel,
  ManagementIcon,
  TrendIcon,
} from "../assets";

export const FontSize = {
  small: 12,
  regular: 14,
  medium: 16,
  large: 18,
};

/**
 * Metrics Sizes
 */
const zero = 0;
const tiny = 5; // 5
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const medium = tiny * 4; // 20
const large = regular * 2; // 30
const xlarge = large * 2; // 60
const xxlarge = xlarge * 2; // 120
const xxxlarge = medium * small; // 200

export const MetricsSizes = {
  zero,
  tiny,
  small,
  regular,
  medium,
  large,
  xlarge,
  xxlarge,
  xxxlarge,
};

const bold: string | any = "bold";
const normal: string | any = "normal";

export const FontWeight = {
  bold,
  normal,
};

export const PondsData = [
  "Talapia Test Pond",
  "Talapia Test Pond Backup",
  "Pond 1",
];
export const TemperatureType = [
  "Temperature",
  "EC",
  "PH",
  "Disolved Oxygen",
  "Backwash",
  "Feed Pump",
];
export const TimeLine = ["15 Minutes", "Hourly", "Daily", "Monthly"];
export const PondSite = [
  "Site - 1",
  "Site - 2",
  "Site - 3",
  "Site - 4",
  "Site - 5",
];

interface PondsDataIcon {
  title: string;
  type: any[];
}
export const PondHeader: PondsDataIcon[] = [
  {
    title: "Feed Pump",
    type: Dashfeedpump,
  },
  {
    title: "Backwash",
    type: Dashbackwash,
  },
  {
    title: "Water Level",
    type: Dashwaterlevel,
  },
  {
    title: "Power",
    type: Dashpower,
  },
];

export const OverviewScreenIcons = [
  {
    view_dashboard_id: 1,
    title: "DashBoard",
    type: DashboardIcon,
  },
  {
    view_production_id: 2,
    title: "Production",
    type: ManagementIcon,
  },
  {
    view_alarm_id: 3,
    title: "Alarm",
    type: AlarmIcon,
  },
  {
    view_trending_id: 4,
    title: "Trending",
    type: TrendIcon,
  },
];

interface PondsDataType {
  name: string;
  details: any[];
}

const water_Level = ["Full", "Idle"];
const water_temp = ["10.50°C", "30.20°C", "100.50°C"];

export const DashBoardOverviewTest: PondsDataType[] = [
  {
    name: PondsData[0],
    details: [
      {
        view_feedpump_id: 1,
        title: "Feed Pump",
        status: "Full",
        volume: "100g",
        LastRunTime: "02/08/2023 - 10:00:00",
      },
      {
        view_backwash_id: 2,
        title: "Backwash",
        status: "Full",
        volume: "205 liters",
        LastRunTime: "02/08/2023 - 10:00:00",
      },
      {
        view_waterlevel_id: 3,
        title: "Water Level",
        status: water_Level[0],
        volume: "300 liters",
        LastRunTime: "02/08/2023 - 10:00:00",
        watertemp: water_temp[0],
        reservoirwaterlevel: water_Level[0],
      },
      {
        view_Power_id: 4,
        title: "Power",
        status: "Idle",
        LastRunTime: "02/08/2023 - 10:00:00",
      },
    ],
  },

  {
    name: PondsData[1],
    details: [
      {
        view_feedpump_id: 1,
        title: "Feed Pump",
        status: "Idle",
        volume: "300g",
        LastRunTime: "03/07/2023 - 14:00:00",
      },
      {
        view_backwash_id: 2,
        title: "Backwash",
        status: "Full",
        volume: "205 liters",
        LastRunTime: "03/07/2023 - 14:00:00",
      },
      {
        view_waterlevel_id: 3,
        title: "Water Level",
        status: water_Level[1],
        volume: "300 liters",
        LastRunTime: "03/07/2023 - 14:00:00",
        watertemp: water_temp[1],
        reservoirwaterlevel: water_Level[1],
      },
      {
        view_Power_id: 4,
        title: "Power",
        status: "Full",
        LastRunTime: "03/07/2023 - 14:00:00",
      },
    ],
  },

  {
    name: PondsData[2],
    details: [
      {
        view_feedpump_id: 1,
        title: "Feed Pump",
        status: "Idle",
        volume: "120g",
        LastRunTime: "02/08/2023 - 10:00:00",
      },
      {
        view_backwash_id: 2,
        title: "Backwash",
        status: "Idle",
        volume: "205 liters",
        LastRunTime: "02/08/2023 - 10:00:00",
      },
      {
        view_waterlevel_id: 3,
        title: "Water Level",
        status: water_Level[1],
        volume: "50 liters",
        LastRunTime: "02/08/2023 - 10:00:00",
        watertemp: water_temp[2],
        reservoirwaterlevel: water_Level[1],
      },
      {
        view_Power_id: 4,
        title: "Power",
        status: "Idle",
        LastRunTime: "02/08/2023 - 10:00:00",
      },
    ],
  },
];

export const GridDataProduction = [
  {
    key: 1,
    date: "02/4/2020",
    total_cost: "2000",
    gross_income: "1000",
    net_income: "1000",
    weight: "50",
  },
  {
    key: 2,
    date: "24/4/2020",
    total_cost: "5000",
    gross_income: "3000",
    net_income: "2000",
    weight: "30",
  },
  {
    key: 3,
    date: "01/5/2022",
    total_cost: "10000",
    gross_income: "5000",
    net_income: "5000",
    weight: "54",
  },
  {
    key: 4,
    date: "10/5/2022",
    total_cost: "12000",
    gross_income: "8000",
    net_income: "4000",
    weight: "76",
  },
  {
    key: 5,
    date: "18/5/2022",
    total_cost: "12000",
    gross_income: "9000",
    net_income: "3000",
    weight: "28",
  },
  {
    key: 6,
    date: "26/6/2023",
    total_cost: "110000",
    gross_income: "100000",
    net_income: "10000",
    weight: "45",
  },
];

export const GridData = [
  {
    key: 1,
    time: "00.28",
    average: "28.36",
    min: "28.39",
    max: "28.28",
  },
  {
    key: 2,
    time: "01.58",
    average: "10.36",
    min: "15.39",
    max: "30.28",
  },
  {
    key: 3,
    time: "02.00",
    average: "55.36",
    min: "05.39",
    max: "09.28",
  },
  {
    key: 4,
    time: "07.00",
    average: "17.40",
    min: "15.39",
    max: "30.28",
  },
  {
    key: 5,
    time: "03.10",
    average: "12.20",
    min: "11.23",
    max: "14.65",
  },
  {
    key: 6,
    time: "08.15",
    average: "11.40",
    min: "26.12",
    max: "40.80",
  },
  {
    key: 7,
    time: "06.13",
    average: "14.50",
    min: "15.10",
    max: "22.18",
  },
  {
    key: 8,
    time: "05.13",
    average: "17.30",
    min: "12.09",
    max: "18.59",
  },
  {
    key: 9,
    time: "02.11",
    average: "14.22",
    min: "11.20",
    max: "19.20",
  },
  {
    key: 10,
    time: "08.21",
    average: "18.12",
    min: "12.30",
    max: "19.10",
  },
];
