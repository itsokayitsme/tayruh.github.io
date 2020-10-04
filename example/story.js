sadako.story = {"start":{"0":[{"t":"[:& $.on_floor = true:]"},{"t":">> #room"}]},"room":{"0":[{"t":"You're in a dimly lit room."},{"t":"It's really dark in here. You can see that the windows are covered in cardboard with light just barely seeping out from the corners; not enough to light the room. <>"},{"t":"In the corner of the room seems to be a [: body @: large mass:] of some sort."},{"t":"Now that your eyes have adjusted to the darkness, you spot what appears to be a [:mop:] laying barely within reach. :: #.room > 1 && !%.mop.take_mop"},{"t":"[Examine the mass.]","k":"\\+"},{"t":"[Examine the mop.] :: #.room > 1 && !%.mop.take_mop","k":"\\+"}],"0.4":[{"t":">> #body"}],"0.5":[{"t":">> #mop"}]},"body":{"0":[{"t":"if ($.on_floor)","k":"~"},{"t":"else ","k":"~"},{"t":"<< end","k":"\\-"},{"t":"chat","k":"=","l":"body.chat"},{"t":"The person rolls over and reveals itself to be a young woman. She groans."},{"t":"\"Are you alright?\"","k":"\\+"},{"t":"\"Hey. Get up.\"","k":"\\+"},{"t":"She pushes herself up just enough to rest on her elbow and surveys her surroundings. \"Where are we?\"","k":"\\-"},{"t":"\"I don't know. What do you remember?\"","k":"\\+"},{"t":"\"I can't remember anything.\"","k":"\\+"},{"t":"\"I remember.. falling.\"","k":"\\-"},{"t":"<b><i>End of Demo</i></b>"}],"labels":{"chat":["body","0",3],"stand":["body","0.0",1]},"0.0":[{"t":"The mass is on the other side of the room. You'll have to get up in order to reach it."},{"t":"[Get up.]","k":"\\+","l":"body.stand"},{"t":"[Go back.]","k":"\\+"}],"0.0.1":[{"t":"if (%.body.stand === 1)","k":"~"},{"t":"else ","k":"~"},{"t":"","k":"\\-"},{"t":"[Go back.]","k":"\\+"}],"0.0.1.0":[{"t":"You struggle to stand but your legs are incredibly weak and battered. When did this happen? What happened? You can't remember anything."},{"t":"Either way, you're going to need assistance to stand."}],"0.0.1.1":[{"t":"You're not getting up on your own. Maybe there's something around in the darkness that can help support your weight."}],"0.0.1.3":[{"t":">> #room"}],"0.0.2":[{"t":">> #room"}],"0.1":[{"t":"As you hobble your way to lump on the floor, it becomes increasingly clear that what you're looking at is a body. Are they dead, or just unconscious?"},{"t":"[Poke it.]","k":"\\+"}],"0.1.1":[{"t":"You gently poke the body with the end of the mop. It stirs slightly."},{"t":"[Poke it again.]","k":"\\+"}],"0.1.1.1":[{"t":">> chat"}],"0.5":[{"t":"It takes her a moment to respond. \"I think so..?\" <>"}],"0.6":[{"t":"\"Ugh. Hold on,\" she groans back at you."}]},"mop":{"0":[{"t":"It's no wonder you didn't see the mop at first. Only the head of it manages to escape the darkness thanks to the smallest ray of light escaping the masked windows."},{"t":"[Take the mop.]","k":"\\+","l":"mop.take_mop"},{"t":"[Go back.]","k":"\\+"}],"labels":{"take_mop":["mop","0",1]},"0.1":[{"t":"[:& $.on_floor = false:]"},{"t":"Laying on your side, you reach out as far as you can and manage to grab the head of the mop. You pull it towards yourself."},{"t":"You remove the mop head the handle and brace the handle against the floor. You pull and then push down on the handle as you unsteadily rise to your feet. You continue to rest against it as a makeshift cane."},{"t":"[Go back.]","k":"\\+"}],"0.1.3":[{"t":">> #room"}],"0.2":[{"t":">> #room"}]},"story_data":{"depths":{"body.0.0":["body","0",2],"body.0.1":["body","0",2],"body.0.5":["body","0",7],"body.0.6":["body","0",7],"body.0.8":["body","0",10],"body.0.9":["body","0",10],"body.0.0.1.0":["body","0.0.1",2],"body.0.0.1.1":["body","0.0.1",2]},"version":"0.10.7"}};