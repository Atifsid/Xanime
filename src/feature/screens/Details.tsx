import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GogoAnimeService from '../../core/api/services/GogoAnimeService';
import { DetailsResponse } from '../../core/models/DetailsResponse';
import { Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

const Details = (props: any) => {
    const colors = useTheme().colors;
    const col = 6
    const [isLoading, setLoading] = useState(false);
    const [res, setRes] = useState<DetailsResponse>()
    const api = new GogoAnimeService();

    useEffect(() => {
        setLoading(true)
        api.getDetails(props.route.params.id)
            .then((res) => {
                if (res) {
                    setRes(res)
                }
                setLoading(false)
            })

        // setRes({
        //     "id": "naruto",
        //     "title": "Naruto",
        //     "url": "https://gogoanimehd.io/category/naruto",
        //     "genres": [
        //         "Action",
        //         "Comedy",
        //         "Martial Arts",
        //         "Shounen",
        //         "Super Power"
        //     ],
        //     "totalEpisodes": 220,
        //     "image": "https://gogocdn.net/images/anime/N/naruto.jpg",
        //     "releaseDate": "2002",
        //     "description": "In a world of mystical and powerful enemies lurk in every nation, a legendary Nine-Tailed Demon Fox attacked the ninja village Konoha, killing many innocent people. In response of a desperate measure from the people, the leader of the village – the Fourth Hokage – sacrificed his life to defeat the demon fox. By sacrificing his own life, he sealed the demon fox into a very young boy named, Naruto Uzumaki. Naruto has lost his parents during the attack. He grew up in the village and was mistreated badly by everyone in town.\n\nWith his loud mouth and careless attitude, he is determined to become the greatest ninja, hokage, in his village. Along with friends, and hope, Naruto trains to become a better ninja than expected.",
        //     "subOrDub": "sub",
        //     "type": "TV SERIES",
        //     "status": "Completed",
        //     "otherName": "ナルト",
        //     "episodes": [
        //         {
        //             "id": "naruto-episode-1",
        //             "number": 1,
        //             "url": "https://gogoanimehd.io//naruto-episode-1"
        //         },
        //         {
        //             "id": "naruto-episode-2",
        //             "number": 2,
        //             "url": "https://gogoanimehd.io//naruto-episode-2"
        //         },
        //         {
        //             "id": "naruto-episode-3",
        //             "number": 3,
        //             "url": "https://gogoanimehd.io//naruto-episode-3"
        //         },
        //         {
        //             "id": "naruto-episode-4",
        //             "number": 4,
        //             "url": "https://gogoanimehd.io//naruto-episode-4"
        //         },
        //         {
        //             "id": "naruto-episode-5",
        //             "number": 5,
        //             "url": "https://gogoanimehd.io//naruto-episode-5"
        //         },
        //         {
        //             "id": "naruto-episode-6",
        //             "number": 6,
        //             "url": "https://gogoanimehd.io//naruto-episode-6"
        //         },
        //         {
        //             "id": "naruto-episode-7",
        //             "number": 7,
        //             "url": "https://gogoanimehd.io//naruto-episode-7"
        //         },
        //         {
        //             "id": "naruto-episode-8",
        //             "number": 8,
        //             "url": "https://gogoanimehd.io//naruto-episode-8"
        //         },
        //         {
        //             "id": "naruto-episode-9",
        //             "number": 9,
        //             "url": "https://gogoanimehd.io//naruto-episode-9"
        //         },
        //         {
        //             "id": "naruto-episode-10",
        //             "number": 10,
        //             "url": "https://gogoanimehd.io//naruto-episode-10"
        //         },
        //         {
        //             "id": "naruto-episode-11",
        //             "number": 11,
        //             "url": "https://gogoanimehd.io//naruto-episode-11"
        //         },
        //         {
        //             "id": "naruto-episode-12",
        //             "number": 12,
        //             "url": "https://gogoanimehd.io//naruto-episode-12"
        //         },
        //         {
        //             "id": "naruto-episode-13",
        //             "number": 13,
        //             "url": "https://gogoanimehd.io//naruto-episode-13"
        //         },
        //         {
        //             "id": "naruto-episode-14",
        //             "number": 14,
        //             "url": "https://gogoanimehd.io//naruto-episode-14"
        //         },
        //         {
        //             "id": "naruto-episode-15",
        //             "number": 15,
        //             "url": "https://gogoanimehd.io//naruto-episode-15"
        //         },
        //         {
        //             "id": "naruto-episode-16",
        //             "number": 16,
        //             "url": "https://gogoanimehd.io//naruto-episode-16"
        //         },
        //         {
        //             "id": "naruto-episode-17",
        //             "number": 17,
        //             "url": "https://gogoanimehd.io//naruto-episode-17"
        //         },
        //         {
        //             "id": "naruto-episode-18",
        //             "number": 18,
        //             "url": "https://gogoanimehd.io//naruto-episode-18"
        //         },
        //         {
        //             "id": "naruto-episode-19",
        //             "number": 19,
        //             "url": "https://gogoanimehd.io//naruto-episode-19"
        //         },
        //         {
        //             "id": "naruto-episode-20",
        //             "number": 20,
        //             "url": "https://gogoanimehd.io//naruto-episode-20"
        //         },
        //         {
        //             "id": "naruto-episode-21",
        //             "number": 21,
        //             "url": "https://gogoanimehd.io//naruto-episode-21"
        //         },
        //         {
        //             "id": "naruto-episode-22",
        //             "number": 22,
        //             "url": "https://gogoanimehd.io//naruto-episode-22"
        //         },
        //         {
        //             "id": "naruto-episode-23",
        //             "number": 23,
        //             "url": "https://gogoanimehd.io//naruto-episode-23"
        //         },
        //         {
        //             "id": "naruto-episode-24",
        //             "number": 24,
        //             "url": "https://gogoanimehd.io//naruto-episode-24"
        //         },
        //         {
        //             "id": "naruto-episode-25",
        //             "number": 25,
        //             "url": "https://gogoanimehd.io//naruto-episode-25"
        //         },
        //         {
        //             "id": "naruto-episode-26",
        //             "number": 26,
        //             "url": "https://gogoanimehd.io//naruto-episode-26"
        //         },
        //         {
        //             "id": "naruto-episode-27",
        //             "number": 27,
        //             "url": "https://gogoanimehd.io//naruto-episode-27"
        //         },
        //         {
        //             "id": "naruto-episode-28",
        //             "number": 28,
        //             "url": "https://gogoanimehd.io//naruto-episode-28"
        //         },
        //         {
        //             "id": "naruto-episode-29",
        //             "number": 29,
        //             "url": "https://gogoanimehd.io//naruto-episode-29"
        //         },
        //         {
        //             "id": "naruto-episode-30",
        //             "number": 30,
        //             "url": "https://gogoanimehd.io//naruto-episode-30"
        //         },
        //         {
        //             "id": "naruto-episode-31",
        //             "number": 31,
        //             "url": "https://gogoanimehd.io//naruto-episode-31"
        //         },
        //         {
        //             "id": "naruto-episode-32",
        //             "number": 32,
        //             "url": "https://gogoanimehd.io//naruto-episode-32"
        //         },
        //         {
        //             "id": "naruto-episode-33",
        //             "number": 33,
        //             "url": "https://gogoanimehd.io//naruto-episode-33"
        //         },
        //         {
        //             "id": "naruto-episode-34",
        //             "number": 34,
        //             "url": "https://gogoanimehd.io//naruto-episode-34"
        //         },
        //         {
        //             "id": "naruto-episode-35",
        //             "number": 35,
        //             "url": "https://gogoanimehd.io//naruto-episode-35"
        //         },
        //         {
        //             "id": "naruto-episode-36",
        //             "number": 36,
        //             "url": "https://gogoanimehd.io//naruto-episode-36"
        //         },
        //         {
        //             "id": "naruto-episode-37",
        //             "number": 37,
        //             "url": "https://gogoanimehd.io//naruto-episode-37"
        //         },
        //         {
        //             "id": "naruto-episode-38",
        //             "number": 38,
        //             "url": "https://gogoanimehd.io//naruto-episode-38"
        //         },
        //         {
        //             "id": "naruto-episode-39",
        //             "number": 39,
        //             "url": "https://gogoanimehd.io//naruto-episode-39"
        //         },
        //         {
        //             "id": "naruto-episode-40",
        //             "number": 40,
        //             "url": "https://gogoanimehd.io//naruto-episode-40"
        //         },
        //         {
        //             "id": "naruto-episode-41",
        //             "number": 41,
        //             "url": "https://gogoanimehd.io//naruto-episode-41"
        //         },
        //         {
        //             "id": "naruto-episode-42",
        //             "number": 42,
        //             "url": "https://gogoanimehd.io//naruto-episode-42"
        //         },
        //         {
        //             "id": "naruto-episode-43",
        //             "number": 43,
        //             "url": "https://gogoanimehd.io//naruto-episode-43"
        //         },
        //         {
        //             "id": "naruto-episode-44",
        //             "number": 44,
        //             "url": "https://gogoanimehd.io//naruto-episode-44"
        //         },
        //         {
        //             "id": "naruto-episode-45",
        //             "number": 45,
        //             "url": "https://gogoanimehd.io//naruto-episode-45"
        //         },
        //         {
        //             "id": "naruto-episode-46",
        //             "number": 46,
        //             "url": "https://gogoanimehd.io//naruto-episode-46"
        //         },
        //         {
        //             "id": "naruto-episode-47",
        //             "number": 47,
        //             "url": "https://gogoanimehd.io//naruto-episode-47"
        //         },
        //         {
        //             "id": "naruto-episode-48",
        //             "number": 48,
        //             "url": "https://gogoanimehd.io//naruto-episode-48"
        //         },
        //         {
        //             "id": "naruto-episode-49",
        //             "number": 49,
        //             "url": "https://gogoanimehd.io//naruto-episode-49"
        //         },
        //         {
        //             "id": "naruto-episode-50",
        //             "number": 50,
        //             "url": "https://gogoanimehd.io//naruto-episode-50"
        //         },
        //         {
        //             "id": "naruto-episode-51",
        //             "number": 51,
        //             "url": "https://gogoanimehd.io//naruto-episode-51"
        //         },
        //         {
        //             "id": "naruto-episode-52",
        //             "number": 52,
        //             "url": "https://gogoanimehd.io//naruto-episode-52"
        //         },
        //         {
        //             "id": "naruto-episode-53",
        //             "number": 53,
        //             "url": "https://gogoanimehd.io//naruto-episode-53"
        //         },
        //         {
        //             "id": "naruto-episode-54",
        //             "number": 54,
        //             "url": "https://gogoanimehd.io//naruto-episode-54"
        //         },
        //         {
        //             "id": "naruto-episode-55",
        //             "number": 55,
        //             "url": "https://gogoanimehd.io//naruto-episode-55"
        //         },
        //         {
        //             "id": "naruto-episode-56",
        //             "number": 56,
        //             "url": "https://gogoanimehd.io//naruto-episode-56"
        //         },
        //         {
        //             "id": "naruto-episode-57",
        //             "number": 57,
        //             "url": "https://gogoanimehd.io//naruto-episode-57"
        //         },
        //         {
        //             "id": "naruto-episode-58",
        //             "number": 58,
        //             "url": "https://gogoanimehd.io//naruto-episode-58"
        //         },
        //         {
        //             "id": "naruto-episode-59",
        //             "number": 59,
        //             "url": "https://gogoanimehd.io//naruto-episode-59"
        //         },
        //         {
        //             "id": "naruto-episode-60",
        //             "number": 60,
        //             "url": "https://gogoanimehd.io//naruto-episode-60"
        //         },
        //         {
        //             "id": "naruto-episode-61",
        //             "number": 61,
        //             "url": "https://gogoanimehd.io//naruto-episode-61"
        //         },
        //         {
        //             "id": "naruto-episode-62",
        //             "number": 62,
        //             "url": "https://gogoanimehd.io//naruto-episode-62"
        //         },
        //         {
        //             "id": "naruto-episode-63",
        //             "number": 63,
        //             "url": "https://gogoanimehd.io//naruto-episode-63"
        //         },
        //         {
        //             "id": "naruto-episode-64",
        //             "number": 64,
        //             "url": "https://gogoanimehd.io//naruto-episode-64"
        //         },
        //         {
        //             "id": "naruto-episode-65",
        //             "number": 65,
        //             "url": "https://gogoanimehd.io//naruto-episode-65"
        //         },
        //         {
        //             "id": "naruto-episode-66",
        //             "number": 66,
        //             "url": "https://gogoanimehd.io//naruto-episode-66"
        //         },
        //         {
        //             "id": "naruto-episode-67",
        //             "number": 67,
        //             "url": "https://gogoanimehd.io//naruto-episode-67"
        //         },
        //         {
        //             "id": "naruto-episode-68",
        //             "number": 68,
        //             "url": "https://gogoanimehd.io//naruto-episode-68"
        //         },
        //         {
        //             "id": "naruto-episode-69",
        //             "number": 69,
        //             "url": "https://gogoanimehd.io//naruto-episode-69"
        //         },
        //         {
        //             "id": "naruto-episode-70",
        //             "number": 70,
        //             "url": "https://gogoanimehd.io//naruto-episode-70"
        //         },
        //         {
        //             "id": "naruto-episode-71",
        //             "number": 71,
        //             "url": "https://gogoanimehd.io//naruto-episode-71"
        //         },
        //         {
        //             "id": "naruto-episode-72",
        //             "number": 72,
        //             "url": "https://gogoanimehd.io//naruto-episode-72"
        //         },
        //         {
        //             "id": "naruto-episode-73",
        //             "number": 73,
        //             "url": "https://gogoanimehd.io//naruto-episode-73"
        //         },
        //         {
        //             "id": "naruto-episode-74",
        //             "number": 74,
        //             "url": "https://gogoanimehd.io//naruto-episode-74"
        //         },
        //         {
        //             "id": "naruto-episode-75",
        //             "number": 75,
        //             "url": "https://gogoanimehd.io//naruto-episode-75"
        //         },
        //         {
        //             "id": "naruto-episode-76",
        //             "number": 76,
        //             "url": "https://gogoanimehd.io//naruto-episode-76"
        //         },
        //         {
        //             "id": "naruto-episode-77",
        //             "number": 77,
        //             "url": "https://gogoanimehd.io//naruto-episode-77"
        //         },
        //         {
        //             "id": "naruto-episode-78",
        //             "number": 78,
        //             "url": "https://gogoanimehd.io//naruto-episode-78"
        //         },
        //         {
        //             "id": "naruto-episode-79",
        //             "number": 79,
        //             "url": "https://gogoanimehd.io//naruto-episode-79"
        //         },
        //         {
        //             "id": "naruto-episode-80",
        //             "number": 80,
        //             "url": "https://gogoanimehd.io//naruto-episode-80"
        //         },
        //         {
        //             "id": "naruto-episode-81",
        //             "number": 81,
        //             "url": "https://gogoanimehd.io//naruto-episode-81"
        //         },
        //         {
        //             "id": "naruto-episode-82",
        //             "number": 82,
        //             "url": "https://gogoanimehd.io//naruto-episode-82"
        //         },
        //         {
        //             "id": "naruto-episode-83",
        //             "number": 83,
        //             "url": "https://gogoanimehd.io//naruto-episode-83"
        //         },
        //         {
        //             "id": "naruto-episode-84",
        //             "number": 84,
        //             "url": "https://gogoanimehd.io//naruto-episode-84"
        //         },
        //         {
        //             "id": "naruto-episode-85",
        //             "number": 85,
        //             "url": "https://gogoanimehd.io//naruto-episode-85"
        //         },
        //         {
        //             "id": "naruto-episode-86",
        //             "number": 86,
        //             "url": "https://gogoanimehd.io//naruto-episode-86"
        //         },
        //         {
        //             "id": "naruto-episode-87",
        //             "number": 87,
        //             "url": "https://gogoanimehd.io//naruto-episode-87"
        //         },
        //         {
        //             "id": "naruto-episode-88",
        //             "number": 88,
        //             "url": "https://gogoanimehd.io//naruto-episode-88"
        //         },
        //         {
        //             "id": "naruto-episode-89",
        //             "number": 89,
        //             "url": "https://gogoanimehd.io//naruto-episode-89"
        //         },
        //         {
        //             "id": "naruto-episode-90",
        //             "number": 90,
        //             "url": "https://gogoanimehd.io//naruto-episode-90"
        //         },
        //         {
        //             "id": "naruto-episode-91",
        //             "number": 91,
        //             "url": "https://gogoanimehd.io//naruto-episode-91"
        //         },
        //         {
        //             "id": "naruto-episode-92",
        //             "number": 92,
        //             "url": "https://gogoanimehd.io//naruto-episode-92"
        //         },
        //         {
        //             "id": "naruto-episode-93",
        //             "number": 93,
        //             "url": "https://gogoanimehd.io//naruto-episode-93"
        //         },
        //         {
        //             "id": "naruto-episode-94",
        //             "number": 94,
        //             "url": "https://gogoanimehd.io//naruto-episode-94"
        //         },
        //         {
        //             "id": "naruto-episode-95",
        //             "number": 95,
        //             "url": "https://gogoanimehd.io//naruto-episode-95"
        //         },
        //         {
        //             "id": "naruto-episode-96",
        //             "number": 96,
        //             "url": "https://gogoanimehd.io//naruto-episode-96"
        //         },
        //         {
        //             "id": "naruto-episode-97",
        //             "number": 97,
        //             "url": "https://gogoanimehd.io//naruto-episode-97"
        //         },
        //         {
        //             "id": "naruto-episode-98",
        //             "number": 98,
        //             "url": "https://gogoanimehd.io//naruto-episode-98"
        //         },
        //         {
        //             "id": "naruto-episode-99",
        //             "number": 99,
        //             "url": "https://gogoanimehd.io//naruto-episode-99"
        //         },
        //         {
        //             "id": "naruto-episode-100",
        //             "number": 100,
        //             "url": "https://gogoanimehd.io//naruto-episode-100"
        //         },
        //         {
        //             "id": "naruto-episode-101",
        //             "number": 101,
        //             "url": "https://gogoanimehd.io//naruto-episode-101"
        //         },
        //         {
        //             "id": "naruto-episode-102",
        //             "number": 102,
        //             "url": "https://gogoanimehd.io//naruto-episode-102"
        //         },
        //         {
        //             "id": "naruto-episode-103",
        //             "number": 103,
        //             "url": "https://gogoanimehd.io//naruto-episode-103"
        //         },
        //         {
        //             "id": "naruto-episode-104",
        //             "number": 104,
        //             "url": "https://gogoanimehd.io//naruto-episode-104"
        //         },
        //         {
        //             "id": "naruto-episode-105",
        //             "number": 105,
        //             "url": "https://gogoanimehd.io//naruto-episode-105"
        //         },
        //         {
        //             "id": "naruto-episode-106",
        //             "number": 106,
        //             "url": "https://gogoanimehd.io//naruto-episode-106"
        //         },
        //         {
        //             "id": "naruto-episode-107",
        //             "number": 107,
        //             "url": "https://gogoanimehd.io//naruto-episode-107"
        //         },
        //         {
        //             "id": "naruto-episode-108",
        //             "number": 108,
        //             "url": "https://gogoanimehd.io//naruto-episode-108"
        //         },
        //         {
        //             "id": "naruto-episode-109",
        //             "number": 109,
        //             "url": "https://gogoanimehd.io//naruto-episode-109"
        //         },
        //         {
        //             "id": "naruto-episode-110",
        //             "number": 110,
        //             "url": "https://gogoanimehd.io//naruto-episode-110"
        //         },
        //         {
        //             "id": "naruto-episode-111",
        //             "number": 111,
        //             "url": "https://gogoanimehd.io//naruto-episode-111"
        //         },
        //         {
        //             "id": "naruto-episode-112",
        //             "number": 112,
        //             "url": "https://gogoanimehd.io//naruto-episode-112"
        //         },
        //         {
        //             "id": "naruto-episode-113",
        //             "number": 113,
        //             "url": "https://gogoanimehd.io//naruto-episode-113"
        //         },
        //         {
        //             "id": "naruto-episode-114",
        //             "number": 114,
        //             "url": "https://gogoanimehd.io//naruto-episode-114"
        //         },
        //         {
        //             "id": "naruto-episode-115",
        //             "number": 115,
        //             "url": "https://gogoanimehd.io//naruto-episode-115"
        //         },
        //         {
        //             "id": "naruto-episode-116",
        //             "number": 116,
        //             "url": "https://gogoanimehd.io//naruto-episode-116"
        //         },
        //         {
        //             "id": "naruto-episode-117",
        //             "number": 117,
        //             "url": "https://gogoanimehd.io//naruto-episode-117"
        //         },
        //         {
        //             "id": "naruto-episode-118",
        //             "number": 118,
        //             "url": "https://gogoanimehd.io//naruto-episode-118"
        //         },
        //         {
        //             "id": "naruto-episode-119",
        //             "number": 119,
        //             "url": "https://gogoanimehd.io//naruto-episode-119"
        //         },
        //         {
        //             "id": "naruto-episode-120",
        //             "number": 120,
        //             "url": "https://gogoanimehd.io//naruto-episode-120"
        //         },
        //         {
        //             "id": "naruto-episode-121",
        //             "number": 121,
        //             "url": "https://gogoanimehd.io//naruto-episode-121"
        //         },
        //         {
        //             "id": "naruto-episode-122",
        //             "number": 122,
        //             "url": "https://gogoanimehd.io//naruto-episode-122"
        //         },
        //         {
        //             "id": "naruto-episode-123",
        //             "number": 123,
        //             "url": "https://gogoanimehd.io//naruto-episode-123"
        //         },
        //         {
        //             "id": "naruto-episode-124",
        //             "number": 124,
        //             "url": "https://gogoanimehd.io//naruto-episode-124"
        //         },
        //         {
        //             "id": "naruto-episode-125",
        //             "number": 125,
        //             "url": "https://gogoanimehd.io//naruto-episode-125"
        //         },
        //         {
        //             "id": "naruto-episode-126",
        //             "number": 126,
        //             "url": "https://gogoanimehd.io//naruto-episode-126"
        //         },
        //         {
        //             "id": "naruto-episode-127",
        //             "number": 127,
        //             "url": "https://gogoanimehd.io//naruto-episode-127"
        //         },
        //         {
        //             "id": "naruto-episode-128",
        //             "number": 128,
        //             "url": "https://gogoanimehd.io//naruto-episode-128"
        //         },
        //         {
        //             "id": "naruto-episode-129",
        //             "number": 129,
        //             "url": "https://gogoanimehd.io//naruto-episode-129"
        //         },
        //         {
        //             "id": "naruto-episode-130",
        //             "number": 130,
        //             "url": "https://gogoanimehd.io//naruto-episode-130"
        //         },
        //         {
        //             "id": "naruto-episode-131",
        //             "number": 131,
        //             "url": "https://gogoanimehd.io//naruto-episode-131"
        //         },
        //         {
        //             "id": "naruto-episode-132",
        //             "number": 132,
        //             "url": "https://gogoanimehd.io//naruto-episode-132"
        //         },
        //         {
        //             "id": "naruto-episode-133",
        //             "number": 133,
        //             "url": "https://gogoanimehd.io//naruto-episode-133"
        //         },
        //         {
        //             "id": "naruto-episode-134",
        //             "number": 134,
        //             "url": "https://gogoanimehd.io//naruto-episode-134"
        //         },
        //         {
        //             "id": "naruto-episode-135",
        //             "number": 135,
        //             "url": "https://gogoanimehd.io//naruto-episode-135"
        //         },
        //         {
        //             "id": "naruto-episode-136",
        //             "number": 136,
        //             "url": "https://gogoanimehd.io//naruto-episode-136"
        //         },
        //         {
        //             "id": "naruto-episode-137",
        //             "number": 137,
        //             "url": "https://gogoanimehd.io//naruto-episode-137"
        //         },
        //         {
        //             "id": "naruto-episode-138",
        //             "number": 138,
        //             "url": "https://gogoanimehd.io//naruto-episode-138"
        //         },
        //         {
        //             "id": "naruto-episode-139",
        //             "number": 139,
        //             "url": "https://gogoanimehd.io//naruto-episode-139"
        //         },
        //         {
        //             "id": "naruto-episode-140",
        //             "number": 140,
        //             "url": "https://gogoanimehd.io//naruto-episode-140"
        //         },
        //         {
        //             "id": "naruto-episode-141",
        //             "number": 141,
        //             "url": "https://gogoanimehd.io//naruto-episode-141"
        //         },
        //         {
        //             "id": "naruto-episode-142",
        //             "number": 142,
        //             "url": "https://gogoanimehd.io//naruto-episode-142"
        //         },
        //         {
        //             "id": "naruto-episode-143",
        //             "number": 143,
        //             "url": "https://gogoanimehd.io//naruto-episode-143"
        //         },
        //         {
        //             "id": "naruto-episode-144",
        //             "number": 144,
        //             "url": "https://gogoanimehd.io//naruto-episode-144"
        //         },
        //         {
        //             "id": "naruto-episode-145",
        //             "number": 145,
        //             "url": "https://gogoanimehd.io//naruto-episode-145"
        //         },
        //         {
        //             "id": "naruto-episode-146",
        //             "number": 146,
        //             "url": "https://gogoanimehd.io//naruto-episode-146"
        //         },
        //         {
        //             "id": "naruto-episode-147",
        //             "number": 147,
        //             "url": "https://gogoanimehd.io//naruto-episode-147"
        //         },
        //         {
        //             "id": "naruto-episode-148",
        //             "number": 148,
        //             "url": "https://gogoanimehd.io//naruto-episode-148"
        //         },
        //         {
        //             "id": "naruto-episode-149",
        //             "number": 149,
        //             "url": "https://gogoanimehd.io//naruto-episode-149"
        //         },
        //         {
        //             "id": "naruto-episode-150",
        //             "number": 150,
        //             "url": "https://gogoanimehd.io//naruto-episode-150"
        //         },
        //         {
        //             "id": "naruto-episode-151",
        //             "number": 151,
        //             "url": "https://gogoanimehd.io//naruto-episode-151"
        //         },
        //         {
        //             "id": "naruto-episode-152",
        //             "number": 152,
        //             "url": "https://gogoanimehd.io//naruto-episode-152"
        //         },
        //         {
        //             "id": "naruto-episode-153",
        //             "number": 153,
        //             "url": "https://gogoanimehd.io//naruto-episode-153"
        //         },
        //         {
        //             "id": "naruto-episode-154",
        //             "number": 154,
        //             "url": "https://gogoanimehd.io//naruto-episode-154"
        //         },
        //         {
        //             "id": "naruto-episode-155",
        //             "number": 155,
        //             "url": "https://gogoanimehd.io//naruto-episode-155"
        //         },
        //         {
        //             "id": "naruto-episode-156",
        //             "number": 156,
        //             "url": "https://gogoanimehd.io//naruto-episode-156"
        //         },
        //         {
        //             "id": "naruto-episode-157",
        //             "number": 157,
        //             "url": "https://gogoanimehd.io//naruto-episode-157"
        //         },
        //         {
        //             "id": "naruto-episode-158",
        //             "number": 158,
        //             "url": "https://gogoanimehd.io//naruto-episode-158"
        //         },
        //         {
        //             "id": "naruto-episode-159",
        //             "number": 159,
        //             "url": "https://gogoanimehd.io//naruto-episode-159"
        //         },
        //         {
        //             "id": "naruto-episode-160",
        //             "number": 160,
        //             "url": "https://gogoanimehd.io//naruto-episode-160"
        //         },
        //         {
        //             "id": "naruto-episode-161",
        //             "number": 161,
        //             "url": "https://gogoanimehd.io//naruto-episode-161"
        //         },
        //         {
        //             "id": "naruto-episode-162",
        //             "number": 162,
        //             "url": "https://gogoanimehd.io//naruto-episode-162"
        //         },
        //         {
        //             "id": "naruto-episode-163",
        //             "number": 163,
        //             "url": "https://gogoanimehd.io//naruto-episode-163"
        //         },
        //         {
        //             "id": "naruto-episode-164",
        //             "number": 164,
        //             "url": "https://gogoanimehd.io//naruto-episode-164"
        //         },
        //         {
        //             "id": "naruto-episode-165",
        //             "number": 165,
        //             "url": "https://gogoanimehd.io//naruto-episode-165"
        //         },
        //         {
        //             "id": "naruto-episode-166",
        //             "number": 166,
        //             "url": "https://gogoanimehd.io//naruto-episode-166"
        //         },
        //         {
        //             "id": "naruto-episode-167",
        //             "number": 167,
        //             "url": "https://gogoanimehd.io//naruto-episode-167"
        //         },
        //         {
        //             "id": "naruto-episode-168",
        //             "number": 168,
        //             "url": "https://gogoanimehd.io//naruto-episode-168"
        //         },
        //         {
        //             "id": "naruto-episode-169",
        //             "number": 169,
        //             "url": "https://gogoanimehd.io//naruto-episode-169"
        //         },
        //         {
        //             "id": "naruto-episode-170",
        //             "number": 170,
        //             "url": "https://gogoanimehd.io//naruto-episode-170"
        //         },
        //         {
        //             "id": "naruto-episode-171",
        //             "number": 171,
        //             "url": "https://gogoanimehd.io//naruto-episode-171"
        //         },
        //         {
        //             "id": "naruto-episode-172",
        //             "number": 172,
        //             "url": "https://gogoanimehd.io//naruto-episode-172"
        //         },
        //         {
        //             "id": "naruto-episode-173",
        //             "number": 173,
        //             "url": "https://gogoanimehd.io//naruto-episode-173"
        //         },
        //         {
        //             "id": "naruto-episode-174",
        //             "number": 174,
        //             "url": "https://gogoanimehd.io//naruto-episode-174"
        //         },
        //         {
        //             "id": "naruto-episode-175",
        //             "number": 175,
        //             "url": "https://gogoanimehd.io//naruto-episode-175"
        //         },
        //         {
        //             "id": "naruto-episode-176",
        //             "number": 176,
        //             "url": "https://gogoanimehd.io//naruto-episode-176"
        //         },
        //         {
        //             "id": "naruto-episode-177",
        //             "number": 177,
        //             "url": "https://gogoanimehd.io//naruto-episode-177"
        //         },
        //         {
        //             "id": "naruto-episode-178",
        //             "number": 178,
        //             "url": "https://gogoanimehd.io//naruto-episode-178"
        //         },
        //         {
        //             "id": "naruto-episode-179",
        //             "number": 179,
        //             "url": "https://gogoanimehd.io//naruto-episode-179"
        //         },
        //         {
        //             "id": "naruto-episode-180",
        //             "number": 180,
        //             "url": "https://gogoanimehd.io//naruto-episode-180"
        //         },
        //         {
        //             "id": "naruto-episode-181",
        //             "number": 181,
        //             "url": "https://gogoanimehd.io//naruto-episode-181"
        //         },
        //         {
        //             "id": "naruto-episode-182",
        //             "number": 182,
        //             "url": "https://gogoanimehd.io//naruto-episode-182"
        //         },
        //         {
        //             "id": "naruto-episode-183",
        //             "number": 183,
        //             "url": "https://gogoanimehd.io//naruto-episode-183"
        //         },
        //         {
        //             "id": "naruto-episode-184",
        //             "number": 184,
        //             "url": "https://gogoanimehd.io//naruto-episode-184"
        //         },
        //         {
        //             "id": "naruto-episode-185",
        //             "number": 185,
        //             "url": "https://gogoanimehd.io//naruto-episode-185"
        //         },
        //         {
        //             "id": "naruto-episode-186",
        //             "number": 186,
        //             "url": "https://gogoanimehd.io//naruto-episode-186"
        //         },
        //         {
        //             "id": "naruto-episode-187",
        //             "number": 187,
        //             "url": "https://gogoanimehd.io//naruto-episode-187"
        //         },
        //         {
        //             "id": "naruto-episode-188",
        //             "number": 188,
        //             "url": "https://gogoanimehd.io//naruto-episode-188"
        //         },
        //         {
        //             "id": "naruto-episode-189",
        //             "number": 189,
        //             "url": "https://gogoanimehd.io//naruto-episode-189"
        //         },
        //         {
        //             "id": "naruto-episode-190",
        //             "number": 190,
        //             "url": "https://gogoanimehd.io//naruto-episode-190"
        //         },
        //         {
        //             "id": "naruto-episode-191",
        //             "number": 191,
        //             "url": "https://gogoanimehd.io//naruto-episode-191"
        //         },
        //         {
        //             "id": "naruto-episode-192",
        //             "number": 192,
        //             "url": "https://gogoanimehd.io//naruto-episode-192"
        //         },
        //         {
        //             "id": "naruto-episode-193",
        //             "number": 193,
        //             "url": "https://gogoanimehd.io//naruto-episode-193"
        //         },
        //         {
        //             "id": "naruto-episode-194",
        //             "number": 194,
        //             "url": "https://gogoanimehd.io//naruto-episode-194"
        //         },
        //         {
        //             "id": "naruto-episode-195",
        //             "number": 195,
        //             "url": "https://gogoanimehd.io//naruto-episode-195"
        //         },
        //         {
        //             "id": "naruto-episode-196",
        //             "number": 196,
        //             "url": "https://gogoanimehd.io//naruto-episode-196"
        //         },
        //         {
        //             "id": "naruto-episode-197",
        //             "number": 197,
        //             "url": "https://gogoanimehd.io//naruto-episode-197"
        //         },
        //         {
        //             "id": "naruto-episode-198",
        //             "number": 198,
        //             "url": "https://gogoanimehd.io//naruto-episode-198"
        //         },
        //         {
        //             "id": "naruto-episode-199",
        //             "number": 199,
        //             "url": "https://gogoanimehd.io//naruto-episode-199"
        //         },
        //         {
        //             "id": "naruto-episode-200",
        //             "number": 200,
        //             "url": "https://gogoanimehd.io//naruto-episode-200"
        //         },
        //         {
        //             "id": "naruto-episode-201",
        //             "number": 201,
        //             "url": "https://gogoanimehd.io//naruto-episode-201"
        //         },
        //         {
        //             "id": "naruto-episode-202",
        //             "number": 202,
        //             "url": "https://gogoanimehd.io//naruto-episode-202"
        //         },
        //         {
        //             "id": "naruto-episode-203",
        //             "number": 203,
        //             "url": "https://gogoanimehd.io//naruto-episode-203"
        //         },
        //         {
        //             "id": "naruto-episode-204",
        //             "number": 204,
        //             "url": "https://gogoanimehd.io//naruto-episode-204"
        //         },
        //         {
        //             "id": "naruto-episode-205",
        //             "number": 205,
        //             "url": "https://gogoanimehd.io//naruto-episode-205"
        //         },
        //         {
        //             "id": "naruto-episode-206",
        //             "number": 206,
        //             "url": "https://gogoanimehd.io//naruto-episode-206"
        //         },
        //         {
        //             "id": "naruto-episode-207",
        //             "number": 207,
        //             "url": "https://gogoanimehd.io//naruto-episode-207"
        //         },
        //         {
        //             "id": "naruto-episode-208",
        //             "number": 208,
        //             "url": "https://gogoanimehd.io//naruto-episode-208"
        //         },
        //         {
        //             "id": "naruto-episode-209",
        //             "number": 209,
        //             "url": "https://gogoanimehd.io//naruto-episode-209"
        //         },
        //         {
        //             "id": "naruto-episode-210",
        //             "number": 210,
        //             "url": "https://gogoanimehd.io//naruto-episode-210"
        //         },
        //         {
        //             "id": "naruto-episode-211",
        //             "number": 211,
        //             "url": "https://gogoanimehd.io//naruto-episode-211"
        //         },
        //         {
        //             "id": "naruto-episode-212",
        //             "number": 212,
        //             "url": "https://gogoanimehd.io//naruto-episode-212"
        //         },
        //         {
        //             "id": "naruto-episode-213",
        //             "number": 213,
        //             "url": "https://gogoanimehd.io//naruto-episode-213"
        //         },
        //         {
        //             "id": "naruto-episode-214",
        //             "number": 214,
        //             "url": "https://gogoanimehd.io//naruto-episode-214"
        //         },
        //         {
        //             "id": "naruto-episode-215",
        //             "number": 215,
        //             "url": "https://gogoanimehd.io//naruto-episode-215"
        //         },
        //         {
        //             "id": "naruto-episode-216",
        //             "number": 216,
        //             "url": "https://gogoanimehd.io//naruto-episode-216"
        //         },
        //         {
        //             "id": "naruto-episode-217",
        //             "number": 217,
        //             "url": "https://gogoanimehd.io//naruto-episode-217"
        //         },
        //         {
        //             "id": "naruto-episode-218",
        //             "number": 218,
        //             "url": "https://gogoanimehd.io//naruto-episode-218"
        //         },
        //         {
        //             "id": "naruto-episode-219",
        //             "number": 219,
        //             "url": "https://gogoanimehd.io//naruto-episode-219"
        //         },
        //         {
        //             "id": "naruto-episode-220",
        //             "number": 220,
        //             "url": "https://gogoanimehd.io//naruto-episode-220"
        //         }
        //     ]
        // })
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList numColumns={col}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    ListHeaderComponent={
                        <>
                            <View>
                                <Image style={styles.image} key={res?.id} source={{ uri: res?.image }} />
                            </View>
                            <Text style={{ color: colors.text }} >{res?.description}</Text>

                            <Text style={{ marginVertical: 6 }}>Episodes: -</Text>
                        </>
                    }
                    data={res?.episodes} renderItem={(item) =>
                        <View style={styles.epBox}>
                            <Pressable style={[styles.epText, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]} >
                                <Text>{item.item.number}</Text>
                            </Pressable>
                        </View>
                    }>

                </FlatList>

            </View>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        margin: 18
    },
    image: {
        height: 225,
        width: 156,
        marginBottom: 10
    },
    epBox: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    epText: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        textAlign: 'center'
    },
})