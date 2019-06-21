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
        },
        {
          "id": "hbo_program_1",
          "progress": {
            "percentage": 0,
            "position": 0
          }
        },
        {
          "id": "cw_program_1",
          "progress": {
            "percentage": 31,
            "position": 0
          }
        },
        {
          "id": "vox_program_1",
          "progress": {
            "percentage": 0,
            "position": 1
          }
        },
        {
          "id": "history_program_1",
          "progress": {
            "percentage": 57,
            "position": 0
          }
        },
        {
          "id": "channel5_program_1",
          "progress": {
            "percentage": 0,
            "position": 1
          }
        }
      ]
    };

    return userPreferences;
  }
}

export default UserPreference;