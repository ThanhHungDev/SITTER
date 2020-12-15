<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        ///user supper admin
        DB::table('users')->insert(
            [
                'avatar'              => '/uploads/avatar.jpg',
                'email'               => 'admin@gmail.com',
                'password'            => bcrypt('admin123'),
                'first_name'          => '○○○○',
                'last_name'           => '○○○○',
                'first_name_furigana' => 'first_name_furigana',
                'last_name_furigana'  => 'last_name_furigana',
                'birth_date'          => Carbon::create('1995', '06', '26'),
                'gender'              => 1,
                'post_code'           => '900-0012',
                'pref'                => 'pref',
                'town'                => 'town',
                'address'             => 'address',
                'phone'               => '08033870674',
                'role_id'             => '1',
                'token_verify'        => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
                'active'              => true,
                'deleted'             => false,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'admin_confirm' => 1
            ]);

        

        $experiences = array(
            "保育士",
            "看護師",
            "幼稚園教論",
            "家庭的保育者",
            "子育て支援（地域保育コース）",
            "ACSAベビーシッター養成研修＋現場研修修了者",
            "ACSA居宅訪問基礎研修修了者",
            "助産師",
            "産後ドゥーラ",
            "ナーシングドゥーラ"
        );
        foreach($experiences as $experience ){
            ///user supper admin
            DB::table('experiences')->insert(
                [
                    'name'       => $experience,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ]
            );
        }
        $skills = array(
            '送迎サポート',
            '簡単な料理（離乳食等の温めのみ）',
            '早期対応',
            '夜間対応',
            '子育て経験',
            '病児',
            '病後児',
            '音楽レッスン',
            'スポーツレッスン',
            '定期予約',
            '簡単な家事',
            '英語対応',
            'お泊まり保育',
            '絵、工作レッスン',
            'ペットのお世話',
            '障がい児',
            'お子様の撮影',
            '爪きり',
            '耳や鼻のお手入れ',
            'ベビーマッサージ',
            'お散歩',
            '沐浴',
            '産前・産後サポート',
            '小学生サポート',
            '中学生サポート'
        );
        foreach($skills as $skill ){
            ///user supper admin
            DB::table('skills')->insert(
                [
                    'name'       => $skill,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ]
            );
        }

        DB::table('token_refeshes')->insert(
        [
            'user_id'    => 1,
            'token'      => "hung2fefb83a1a9d0f6b7c0280707a388005",
            'detect'     => "sfsfdsdfsd",
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
    }
}
