# Ticket Manager

## App Behavior

This app is a ticket manager that allows users to buy tickets. It uses event emitters to trigger events, and event listeners to "listen" and execute code when the events are trigged. In addition, the app also manages errors from the event emitter, such as buying too many tickets. The chalk module adds colorful styling to the terminal interface.

### Instructions

In the command line, enter npm run watch.

![command line screenshot](/images/img_1.png)

The following output should pop up on your screen:

![terminal screenshot](/images/img_2.png)

If the tickets run out, the following error message appears:

![terminal screenshot](/images/img_3.png)
