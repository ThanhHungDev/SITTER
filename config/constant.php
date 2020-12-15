<?php
return [

    'MAIL_GLOBAL' => env('MAIL_USERNAME', 'managementpartners.hospital@gmail.com'),

    'MAIL_SUPPORT' => 'managementpartners.hospital@gmail.com',

    'TOKEN_VERIFY' => [

        'WRONG'      => 1,
        'ACTIVED'    => 2,
        'NOT_ACTIVE' => 3,
        'EXPIRED'    => 4,
    ],

    'DAY_EXPIRE' => 1,

    'GENDER' => [
        'MALE'   => 1,
        'FEMALE' => 2,
    ],

    'ROLE' => [
        'ADMIN'    => 1,
        'SITTER'   => 2,
        'EMPLOYER' => 3,
    ],

    'TYPE_UPLOAD_EMPLOYER' => [
        "運転免許証（身分証明書）"       => 1,
        "健康保険証"              => 2,
        "パスポート"              => 3,
        "住民票（6ヶ月以内に発行されたもの）" => 4,
        "マイナンバーカード"          => 5,
    ],

    'TYPE_MEMBER_PARENT' => [
        'FATHER' => 1,
        'MOM'    => 2,
        'CHILD'  => 3
    ],

    'TOKEN_SIZE' => 30,

    'GALARY_TYPE' => [
        'SITTER_FILE_FRONT'   => 1,
        'SITTER_FILE_BACK'    => 2,
        'INPUT_FILE_QUALIFI'  => 3,
        'EMPLOYER_FILE_FRONT' => 4,
        'EMPLOYER_FILE_BACK'  => 5,
        'SITTER_AVATAR'       => 6,
        'EMPLOYER_AVATAR'     => 7,
        'FILE_MIXED'          => 8
    ],

    'UPLOAD_FILE' => [
        'AVATAR'   => 1,
        'SITTER'   => 2,
        'EMPLOYER' => 3,
        'MIXED' => 4
    ],

    'SITTER_TYPE_UPLOAD' => [
        1 => '運転免許証（身分証明書）',
        2 => '健康保険証',
        3 => 'パスポート',
        4 => '住民票（6ヶ月以内に発行されたもの）',
        5 => 'マイナンバーカード',
    ],

    'JP_LOCATION' => [
        "KANTO"             => [
            "Tokyo"         => "東京都",
            "Kanagawa"      => "神奈川県",
            "Saitama"       => "埼玉県",
            "Chiba"         => "千葉県",
            "Tochigi"       => "栃木県",
            "Gunma"         => "群馬県",
            "Ibaraki"       => "茨城県"
        ],
        "KINKI"             => [
            "Shiga"         => "滋賀県",
            "Kyoto"         => "京都府",
            "Osaka"         => "大阪府",
            "Hyogo"         => "兵庫県",
            "Nara"          => "奈良県"
        ],
        "CHUBU"             => [
            "Niigata"       => "新潟県",
            "Toyama"        => "富山県",
            "Ishikawa"      => "石川県",
            "Fukui"         => "福井県",
            "Yamanashi"     => "山梨県",
            "Nagano"        => "長野県",
            "Gifu"          => "岐阜県",
            "Shizuoka"      => "静岡県",
            "Aichi"         => "愛知県",
            "Mie"           => "三重県"
        ],
        "KYUSHU_OKINAWA"    => [
            "Fukuoka"       => "福岡県",
            "Saga"          => "佐賀県",
            "Nagasaki"      => "長崎県",
            "Kumamoto"      => "熊本県",
            "Oita"          => "大分県",
            "Miyazaki"      => "宮崎県",
            "Kagoshima"     => "鹿児島県",
            "Okinawa"       => "沖縄県 "
        ],
        "HOKKAIDO_TOHOKU"   => [
            "Hokkaido"      => "北海道",
            "Aomori"        => "青森県",
            "Iwate"         => "岩手県",
            "Miyagi"        => "宮城県",
            "Akita"         => "秋田県",
            "Yamagata"      => "山形県",
            "Fukushima"     => "福島県"
        ],
        "CHUGOKU"           => [
            "Tottori"       => "鳥取県",
            "Shimane"       => "島根県",
            "Okayama"       => "岡山県",
            "Hiroshima"     => "広島県",
            "Yamaguchi"     => "山口県"
        ],
        "SHIKOKU"           => [
            "Tokushima"     => "徳島県",
            "Kagawa"        => "香川県",
            "Ehime"         => "愛媛県",
            "Kochi"         => "高知県"
        ]
    ],

    'API_JP_LOCATION' => [
        [ 
            "name"  => "関東",
            "item"  => [
                ["key" => "Tokyo", "value" => "東京都"],
                ["key" => "Kanagawa", "value" => "神奈川県"],
                ["key" => "Saitama", "value" => "埼玉県"],
                ["key" => "Chiba", "value" => "千葉県"],
                ["key" => "Tochigi", "value" => "栃木県"],
                ["key" => "Gunma",  "value" => "群馬県"],
                ["key" => "Ibaraki", "value" => "茨城県"]
            ]
        ],
        [
            "name" => "近畿",             
            "item"  => [
                ["key" => "Shiga", "value" => "滋賀県"],
                ["key" => "Kyoto", "value" => "京都府"],
                ["key" => "Osaka", "value" => "大阪府"],
                ["key" => "Hyogo", "value" => "兵庫県"],
                ["key" => "Nara", "value" => "奈良県"]
            ]
        ],
        [
            "name" => "中部",
            "item" => [
                ["key" =>"Niigata", "value" => "新潟県"],
                ["key" =>"Toyama", "value" => "富山県"],
                ["key" =>"Ishikawa", "value" => "石川県"],
                ["key" =>"Fukui", "value" => "福井県"],
                ["key" =>"Yamanashi", "value" => "山梨県"],
                ["key" =>"Nagano", "value" => "長野県"],
                ["key" =>"Gifu", "value" => "岐阜県"],
                ["key" =>"Shizuoka", "value" => "静岡県"],
                ["key" =>"Aichi", "value" => "愛知県"],
                ["key" =>"Mie", "value" => "三重県"]
            ]
        ],
        [
            "name" => "九州・沖縄",
            "item" => [
                ["key" =>"Fukuoka", "value" => "福岡県"],
                ["key" =>"Saga", "value" => "佐賀県"],
                ["key" =>"Nagasaki", "value" => "長崎県"],
                ["key" =>"Kumamoto", "value" => "熊本県"],
                ["key" =>"Oita", "value" => "大分県"],
                ["key" =>"Miyazaki", "value" => "宮崎県"],
                ["key" =>"Kagoshima", "value" => "鹿児島県"],
                ["key" =>"Okinawa", "value" => "沖縄県 "]
            ]
        ],
        [
            "name" => "北海道・東北",
            "item" => [
            ["key" =>"Hokkaido", "value" => "北海道"],
            ["key" =>"Aomori", "value" => "青森県"],
            ["key" =>"Iwate", "value" => "岩手県"],
            ["key" =>"Miyagi", "value" => "宮城県"],
            ["key" =>"Akita", "value" => "秋田県"],
            ["key" =>"Yamagata", "value" => "山形県"],
            ["key" =>"Fukushima", "value" => "福島県"]
            ]
        ],
        [
            "name"  => "中国",
            "item"  => [
                ["key" =>"Tottori", "value" => "鳥取県"],
                ["key" =>"Shimane", "value" => "島根県"],
                ["key" =>"Okayama", "value" => "岡山県"],
                ["key" =>"Hiroshima", "value" => "広島県"],
                ["key" =>"Yamaguchi", "value" => "山口県"]
            ]
        ],
        [
            "name"  => "四国",
            "item"  => [
                ["key" =>"Tokushima", "value" =>"徳島県"],
                ["key" =>"Kagawa", "value" =>"香川県"],
                ["key" =>"Ehime", "value" => "愛媛県"],
                ["key" =>"Kochi", "value" => "高知県"]
            ]
        ]
    ],

    'API_ITEM_SEARCH' => [
        [
            "group" => "保育可能年齢",
            "key" => "age_range",
            "data" => [
                ["value" => "0mth", "text" => "0歳0ヶ月"],
                ["value" => "1to2mth", "text" => "0歳1ヶ月~2ヶ月"],
                ["value" => "3to5mth", "text" => "0歳3ヶ月~5ヶ月"],
                ["value" => "6to11mth", "text" => "0歳6ヶ月~11ヶ月"],
                ["value" => "1year", "text" => "1歳"],
                ["value" => "2year", "text" => "2歳"],
                ["value" => "3to6year", "text" => "3歳~6歳"],
                ["value" => "gt7year", "text" => "7歳以上"]
            ]
        ],
        [
            "group" => "受け入れ人数",
            "key" => "num_child",
            "data" => [
                ["value" => "1", "text" => "1人"],
                ["value" => "2", "text" => "2人"],
                ["value" => "3", "text" => "3人以上"],
            ]
        ],
        [
            "group" => "時給",
            "key" => "cash",
            "data" => [
                ["value" => "1", "text" => "1000円～1500円"],
                ["value" => "2", "text" => "1500円～2000円"],
                ["value" => "3", "text" => "2000円～2300円"],
                ["value" => "4", "text" => "2300円～2600円"],
                ["value" => "5", "text" => "2600円～3000円"],
                ["value" => "6", "text" => "3000円～"]
            ]
        ],
        [
            "group" => "保有資格",
            "key" => "exps",
            "data" => [
                ["value" => "1", "text" => "保育士"],
                ["value" => "2", "text" => "看護師"],
                ["value" => "3", "text" => "幼稚園教論"],
                ["value" => "4", "text" => "家庭的保育者"],
                ["value" => "5", "text" => "子育て支援（地域保育コース）"],
                ["value" => "6", "text" => "ACSAベビーシッター養成研修＋現場研修修了者"],
                ["value" => "7", "text" => "ACSA居宅訪問基礎研修修了者"],
                ["value" => "8", "text" => "助産師"],
                ["value" => "9", "text" => "産後ドゥーラ"],
                ["value" => "10", "text" => "ナーシングドゥーラ"],
            ]
        ],
        [
            "group" => "特徴",
            "key" => "skills",
            "data" => [
                ["value" => "1", "text" => "送迎サポート"],
                ["value" => "2", "text" => "簡単な料理（離乳食等の温めのみ）"],
                ["value" => "3", "text" => "早期対応"],
                ["value" => "4", "text" => "夜間対応"],
                ["value" => "5", "text" => "子育て経験"],
                ["value" => "6", "text" => "病児"],
                ["value" => "7", "text" => "病後児"],
                ["value" => "8", "text" => "音楽レッスン"],
                ["value" => "9", "text" => "スポーツレッスン"],
                ["value" => "10", "text" => "定期予約"],
                ["value" => "11", "text" => "簡単な家事"],
                ["value" => "12", "text" => "英語対応"],
                ["value" => "13", "text" => "お泊まり保育"],
                ["value" => "14", "text" => "絵、工作レッスン"],
                ["value" => "15", "text" => "ペットのお世話"],
                ["value" => "16", "text" => "障がい児"],
                ["value" => "17", "text" => "お子様の撮影"],
                ["value" => "18", "text" => "爪きり"],
                ["value" => "19", "text" => "耳や鼻のお手入れ"],
                ["value" => "20", "text" => "ベビーマッサージ"],
                ["value" => "21", "text" => "お散歩"],
                ["value" => "22", "text" => "沐浴"],
                ["value" => "23", "text" => "産前・産後サポート"],
                ["value" => "24", "text" => "小学生サポート"],
                ["value" => "25", "text" => "中学生サポート"]
            ]
        ],

    ],

    // save to database with data types is the month
    'KID_AGE' => [
        1 => '0歳1ヶ月',
        2 => '0歳2ヶ月',
        3 => '0歳3ヶ月',
        4 => '0歳4ヶ月',
        5 => '0歳5ヶ月',
        6 => '0歳6ヶ月',
        7 => '0歳7ヶ月',
        8 => '0歳8ヶ月',
        9 => '0歳9ヶ月',
        10 => '0歳10ヶ月',
        11 => '0歳11ヶ月',
        12 => '1歳',
        24 => '2歳',
        36 => '3歳',
        48 => '4歳',
        60 => '5歳',
        72 => '6歳',
        84 => '7歳',
        96 => '8歳',
        108 => '9歳',
        120 => '10歳',
    ],

    'TIME_SUPORT' => [
        '01:00' => '1時間',
        '01:30' => '1時間30分',
        '02:00' => '2時間',
        '02:30' => '2時間30分',
        '03:00' => '3時間',
        '03:30' => '3時間30分',
        '04:00' => '4時間',
        '04:30' => '4時間30分',
        '05:00' => '5時間',
        '05:30' => '5時間30分',
        '06:00' => '6時間',
        '06:30' => '6時間30分',
        '07:00' => '7時間',
        '07:30' => '7時間30分',
        '08:00' => '8時間',
    ],

    'SALARY_TYPE' => [
        "SALARY_SITTER" => 1,
        "SALARY_HOUSE"  => 2,
    ],

    'CALENDAR' => [
        'DAY_FREE' => 0,
        'DAY_BUSY' => 1,
        'CARER' => 1,
        'HOUSEMAID' => 2,
    ],

    // constant for sitter add here

    'EXP_TOKEN' => '1800',//30minute
    'LIMIT_RECORD' => 10,
    'LIMIT_RECORD_REVIEW' => 3,

    //admin confirm
    'ADMIN_CONFIRM' => [
        "DEFAULT" => 0,
        "ACCEPT" => 1,
        "UNACCEPT"  => 2,
    ],
    'TOKEN_COOKIE_NAME'  => "TOKEN_COOKIE_NAME",
    'BACK_ROUTE_SESSION' => "BACK_ROUTE_SESSION",
    'BACK_ID_SESSION'    => "BACK_ID_SESSION",

    // for filter salary range
    'SALARY_FILTER_RANGE' => [
        1 => '1000円～1500円',
        2 => '1500円～2000円',
        3 => '2000円～2300円',
        4 => '2300円～2600円',
        5 => '2600円～3000円',
        6 => '3000円～',
    ],

    //type refund
    'TYPE_REFUND' =>[
        'REFUND_ALL' => 1,
        'REFUND_HALF' => 2,
        'NON_REFUND' => 3
    ],

    'PERCEN_REFUND'=>[
        1 => 100,
        2 => 50,
        3 => 0
    ],

    //person cancel
    'PERSON_CANCEL' => [
        'EMPLOYER' => 1,
        'SITTER' => 2 
    ],

    //version css, js
    'VERSION_CSS' => Date('YmdHi'),
    'VERSION_JS' => Date('YmdHi'),

    'BOOKING_HIDDEN_CHANNEL' => [
        'DEFAULT' => 0, 
        'FILTERED' => 1
    ],

    // list city
    'JP_CITY' => [
        '北海道'        => 1,
        '青森県'        => 2,
        '岩手県'        => 3,
        '宮城県'        => 4,
        '秋田県'        => 5,
        '山形県'        => 6,
        '福島県'        => 7,
        '茨城県'        => 8,
        '栃木県'        => 9,
        '群馬県'        => 10,
        '埼玉県'        => 11,
        '千葉県'        => 12,
        '東京都'        => 13,
        '神奈川県'      => 14,
        '新潟県'        => 15,
        '富山県'        => 16,
        '石川県'        => 17,
        '福井県'        => 18,
        '山梨県'        => 19,
        '長野県'        => 20,
        '岐阜県'        => 21,
        '静岡県'        => 22,
        '愛知県'        => 23,
        '三重県'        => 24,
        '滋賀県'        => 25,
        '京都府'        => 26,
        '大阪府'        => 27,
        '兵庫県'        => 28,
        '奈良県'        => 29,
        '和歌山県'      => 30,
        '鳥取県'        => 31,
        '島根県'        => 32,
        '岡山県'        => 33,
        '広島県'        => 34,
        '山口県'        => 35,
        '徳島県'        => 36,
        '香川県'        => 37,
        '愛媛県'        => 38,
        '高知県'        => 39,
        '福岡県'        => 40,
        '佐賀県'        => 41,
        '長崎県'        => 42,
        '熊本県'        => 43,
        '大分県'        => 44,
        '宮崎県'        => 45,
        '鹿児島県'      => 46,
        '沖縄県'        => 47,
        '海外'          => 48,
    ],
];
