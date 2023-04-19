/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * If you're showing an unlock value in the UI, this is the format in which it
 * should be shown. You'll have to build your own algorithms on the client side to
 * determine how best to render these options.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyUnlockValueUIStyle}
*/
export declare enum DestinyUnlockValueUIStyle {
    /** Generally, Automatic means "Just show the number" */
    Automatic = 0,
    /**
     * Show the number as a fractional value. For this to make sense, the value being
     * displayed should have a comparable upper bound, like the progress to the next
     * level of a Progression.
    */
    Fraction = 1,
    /**
     * Show the number as a checkbox. 0 Will mean unchecked, any other value will mean
     * checked.
    */
    Checkbox = 2,
    /**
     * Show the number as a percentage. For this to make sense, the value being
     * displayed should have a comparable upper bound, like the progress to the next
     * level of a Progression.
    */
    Percentage = 3,
    /**
     * Show the number as a date and time. The number will be the number of seconds
     * since the Unix Epoch (January 1st, 1970 at midnight UTC). It'll be up to you to
     * convert this into a date and time format understandable to the user in their
     * time zone.
    */
    DateTime = 4,
    /**
     * Show the number as a floating point value that represents a fraction, where 0 is
     * min and 1 is max. For this to make sense, the value being displayed should have
     * a comparable upper bound, like the progress to the next level of a Progression.
    */
    FractionFloat = 5,
    /** Show the number as a straight-up integer. */
    Integer = 6,
    /** Show the number as a time duration. The value will be returned as seconds. */
    TimeDuration = 7,
    /**
     * Don't bother showing the value at all, it's not easily human-interpretable, and
     * used for some internal purpose.
    */
    Hidden = 8,
    /** Example: "1.5x" */
    Multiplier = 9,
    /**
     * Show the value as a series of green pips, like the wins in a Trials of Osiris
     * score card.
    */
    GreenPips = 10,
    /**
     * Show the value as a series of red pips, like the losses in a Trials of Osiris
     * score card.
    */
    RedPips = 11,
    /**
     * Show the value as a percentage. For example: "51%" - Does no division, only
     * appends '%'
    */
    ExplicitPercentage = 12,
    /**
     * Show the value as a floating-point number. For example: "4.52" NOTE: Passed
     * along from Investment as whole number with last two digits as decimal values (
     * 452 -> 4.52)
    */
    RawFloat = 13,
    /** Show the value as a level and a reward. */
    LevelAndReward = 14
}
