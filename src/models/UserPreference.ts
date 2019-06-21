class UserPreference {

  static getUserPreferences() {
    const userPreferences = {
      "user":"user_id",
      "programs": [
        {
          "id": "dummy_program_id",
          "progress": {
            "percentage": 50.5,
            "position": 0
          }
        },
        {
          "id": "silver_program_1",
          "progress": {
            "percentage": 90,
            "position": 1
          }
        },
        {
          "id": "sky1_program_1",
          "progress": {
            "percentage": 5,
            "position": 1
          }
        }
      ]
    };

    return userPreferences;
  }
}

export default UserPreference;