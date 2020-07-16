<?php 

namespace App\FactoryModel;

interface FactoryModelInterface
{
    
    // public function createCategoryModel();
    // public function createCategoryStyleModel();
    // public function createCategoryTypeModel();
    // public function createImageModel();
    // public function createPostActiveStyleModel();
    // public function createPostModel();
    // public function createRatingActiveModel();

    public function createUserModel();
    // public function createRatingModel();
    public function createDBModel();
    public function createMessageModel();
    public function createChannelModel();
    public function createVerifyEmailModel();
    public function createSitterProfileModel();
    public function createGalaryModel();
    public function createEmployerProfileModel();
    public function createTokenRefeshModel();
    public function createExperienceModel();
    public function createSkillModel();
    public function createSkillActivityModel();
    public function createSitterModel();
    public function createSalaryModel();
    public function createPasswordResetModel();
    public function createScheduleModel();
}