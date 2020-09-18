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
    'STRIPE_PUBLIC_KEY' => 'pk_test_51HH3fxEkyn0XMKpGPVUghMwsvtR0lktiryL5WUbPkvzhx1Ykw0V5j8w20RPXQLXAnNTlbqShTAiJaQaTwcNMI6Pz00H35guI44',
    'STRIPE_SECRET_KEY' => 'sk_test_51HH3fxEkyn0XMKpG77QqVE25YW8wxLTAhjbl2rykPI4KHVsy39d2QxF9v37hRM4wpCJVwVPRcr6fNmqigrDzPihD00Gn0FvEI8'
];
