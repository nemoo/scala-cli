package scala.cli.integration

abstract class ScalaCliSuite extends munit.FunSuite {
  def group: ScalaCliSuite.TestGroup = ScalaCliSuite.TestGroup.Third

  override def munitIgnore: Boolean =
    Option(System.getenv("SCALA_CLI_IT_GROUP"))
      .flatMap(_.toIntOption)
      .exists(_ != group.idx)

  var t0 = System.currentTimeMillis()

  override def beforeAll(): Unit = {
    t0 = System.currentTimeMillis()
  }

  override def afterAll(): Unit = {
    val t1 = System.currentTimeMillis()
    System.err.println(s"Elapsed time: ${this.getClass.getName} " + ((t1 - t0)/1000) + "s")
  }
}

object ScalaCliSuite {
  sealed abstract class TestGroup(val idx: Int) extends Product with Serializable
  object TestGroup {
    case object First  extends TestGroup(1)
    case object Second extends TestGroup(2)
    case object Third  extends TestGroup(3)
  }
}
