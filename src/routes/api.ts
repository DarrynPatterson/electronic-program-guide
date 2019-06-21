import express, { Request, Response } from "express";
import Channel from "../models/Channel";
import UserPreference from "../models/UserPreference";

const router = express.Router();

// @route   GET api/channels
// @desc    Get channel data
// @access  Public
router.get("/channels", (req: Request, res: Response) => {

  // Only channels with schedules will be returned
  const channels = Channel.getAllChannels();
  const userPreferences = UserPreference.getUserPreferences();
  
  const result = {
    channels,
    userPreferences
  };

  res.json(result);
});

module.exports = router;