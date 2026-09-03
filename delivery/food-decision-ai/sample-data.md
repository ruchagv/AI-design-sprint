# MealCraft — Sample Data
**Prototype:** v3 · Private Preview
**Persona:** Karan, 28, Bengaluru
**Generated for:** HTML demo population

---

## 1. User Profile

| Field | Value |
|---|---|
| **Name** | Karan |
| **Age** | 28 |
| **City** | Bengaluru |
| **Email (demo)** | karan@example.com |
| **Password (demo)** | abcd1234 |

---

## 2. Onboarding Preferences

### Screen 1 — Diet & Allergies

| Field | Value |
|---|---|
| **Dietary type** | Vegetarian |
| **Food allergies / intolerances** | None |
| **Spice tolerance** | Medium |

### Screen 2 — Cuisines & Dislikes

| Field | Value |
|---|---|
| **Cuisine ranking** | 1. North Indian · 2. South Indian · 3. Chinese · 4. Continental · 5. Mediterranean |
| **Disliked ingredients** | None |

### Screen 3 — Goal & Household

| Field | Value |
|---|---|
| **Health / fitness goal** | No specific goal |
| **Household size** | Just me |

### Screen 4 — Cook Schedule

| Field | Value |
|---|---|
| **Has a cook?** | Yes |
| **Cook days** | Weekdays only (Mon–Fri) |
| **Cook arrival time** | Before 8am |
| **Meals the cook handles** | Breakfast · Lunch |
| **Notification time** | 7:15am |

---

## 3. Confirmation Screen Summary

```
You're all set, Karan.

🥗  Diet          Vegetarian
🍛  Top cuisine   North Indian
🏠  Household     Just me
👩‍🍳  Cook days     Weekdays · Breakfast & Lunch

🔔  Every morning at 7:15am, you'll get your meal plan —
    ready to send straight to your cook.
```

---

## 4. Cook Contact

| Field | Value |
|---|---|
| **Cook name** | Savitri |
| **WhatsApp number** | +91 98765 43210 |

---

## 5. Weekly Meal Plan (Mon 4 Aug – Fri 8 Aug)

> Rules applied: vegetarian only · medium spice · North Indian–first · no dish repeated within the week · breakfast and lunch are cook-handled · no allergies or dislikes to filter.

### Monday, 4 Aug

| Slot | Dish | Cuisine tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Poha | North Indian · Light | ✓ Cook |
| ☀️ Lunch | Dal Chawal | North Indian · Comfort | ✓ Cook |
| 🫘 Evening snack | Roasted chana | Quick snack | – Self |
| 🌙 Dinner | Paneer butter masala + roti | North Indian · Rich | – Self / Delivery |

### Tuesday, 5 Aug

| Slot | Dish | Cuisine tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Upma | South Indian · Light | ✓ Cook |
| ☀️ Lunch | Rajma Chawal | North Indian · High protein | ✓ Cook |
| 🫘 Evening snack | Mixed nuts | High protein · No cook | – Self |
| 🌙 Dinner | Palak paneer + rice | North Indian · Healthy | – Self / Delivery |

### Wednesday, 6 Aug

| Slot | Dish | Cuisine tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Idli Sambar | South Indian · Light | ✓ Cook |
| ☀️ Lunch | Chole Chawal | North Indian · High protein | ✓ Cook |
| 🫘 Evening snack | Fruit bowl | Light · Seasonal | – Self |
| 🌙 Dinner | Veg fried rice | Chinese · Light | – Self / Delivery |

### Thursday, 7 Aug

| Slot | Dish | Cuisine tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Methi Paratha + curd | North Indian · Filling | ✓ Cook |
| ☀️ Lunch | Kadhi Chawal | North Indian · Comfort | ✓ Cook |
| 🫘 Evening snack | Roasted makhana | Light · No cook | – Self |
| 🌙 Dinner | Paneer tikka wrap | North Indian · Medium spice | – Self / Delivery |

### Friday, 8 Aug

| Slot | Dish | Cuisine tag | Cook? |
|---|---|---|---|
| 🌅 Breakfast | Vegetable Dosa | South Indian · Crispy | ✓ Cook |
| ☀️ Lunch | Matar Paneer + roti | North Indian · Filling | ✓ Cook |
| 🫘 Evening snack | Sprout chaat | High protein · Light | – Self |
| 🌙 Dinner | Veg Manchurian + noodles | Chinese · Medium spice | – Self / Delivery |

---

## 6. Swap Options Pool (per meal slot)

> Shown in the swap bottom sheet — max 3 alternatives per slot, no repeats within the week.

### Breakfast swaps
1. Poha · North Indian · Light
2. Upma · South Indian · Light
3. Methi Paratha · North Indian · Filling

### Lunch swaps
1. Dal Chawal · North Indian · Comfort
2. Rajma Chawal · North Indian · High protein
3. Chole Chawal · North Indian · High protein

### Evening snack swaps
1. Roasted chana · Quick snack
2. Mixed nuts · High protein · No cook
3. Fruit bowl · Light · Seasonal

### Dinner swaps
1. Paneer butter masala + roti · North Indian · Rich
2. Veg fried rice · Chinese · Light
3. Palak paneer + rice · North Indian · Healthy

---

## 7. Hindi Transcript (Monday, default)

> Used in the cook handoff screen. Generated from Monday's cook-handled meals (Breakfast + Lunch).

```
Aaj breakfast mein poha banao.
Lunch mein dal chawal banao.
```

> Format rule: `[meal slot] mein [dish name in lowercase] banao.`
> One sentence per cook-handled meal. Medium spice is assumed as default — no explicit spice instruction unless dish is naturally spiced.

---

## 8. Push Notification Copy (Monday)

```
Title:  Today's meals are ready 🍽
Body:   Breakfast: Poha  ·  Lunch: Dal Chawal
```

> Action buttons: [Send to cook]  [View]

---

## 9. Sent Confirmation Screen (Monday)

```
Sent. Done.
Savitri got your voice note. Food is sorted.

Sent to Savitri · Today

🌅  Breakfast   Poha             Sent ✓
☀️  Lunch       Dal Chawal       Sent ✓

Next suggestion arrives tomorrow at 7:15am.
```

---

## 10. Settings / Preferences Screen Values

| Setting | Display value |
|---|---|
| Diet type | Vegetarian |
| Top cuisine | North Indian |
| Health goal | No specific goal |
| Household size | Just me |
| Cook schedule | Weekdays · Breakfast & Lunch |
| Disliked ingredients | None |
| Cook's WhatsApp contact | Savitri · +91 98765 43210 |
| Notification time | 7:15am daily |
