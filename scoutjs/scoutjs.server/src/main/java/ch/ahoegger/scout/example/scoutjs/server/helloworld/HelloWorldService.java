package ch.ahoegger.scout.example.scoutjs.server.helloworld;

import ch.ahoegger.scout.example.scoutjs.server.ServerSession;
import ch.ahoegger.scout.example.scoutjs.shared.helloworld.HelloWorldFormData;
import ch.ahoegger.scout.example.scoutjs.shared.helloworld.IHelloWorldService;

/**
 * <h3>{@link HelloWorldService}</h3>
 *
 * @author aho
 */
public class HelloWorldService implements IHelloWorldService {

  @Override
  public HelloWorldFormData load(HelloWorldFormData input) {
    StringBuilder msg = new StringBuilder();
    msg.append("Hello ").append(ServerSession.get().getUserId()).append('!');
    input.getMessage().setValue(msg.toString());
    return input;
  }
}
