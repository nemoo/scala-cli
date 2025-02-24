package scala.cli.commands.github

import caseapp.*

import scala.cli.commands.shared.{HasLoggingOptions, LoggingOptions}
import scala.cli.signing.shared.{PasswordOption, Secret}
import scala.cli.signing.util.ArgParsers.*

// format: off
final case class SharedSecretOptions(
  @Recurse
    logging: LoggingOptions = LoggingOptions(),
  token: PasswordOption = PasswordOption.Value(Secret("")),
  @ExtraName("repo")
    repository: String = ""
) extends HasLoggingOptions {
  // format: on

  lazy val (repoOrg, repoName) =
    repository.split('/') match {
      case Array(org, name) => (org, name)
      case _ =>
        sys.error(s"Malformed repository: '$repository' (expected 'org/name')")
    }
}

object SharedSecretOptions {
  implicit lazy val parser: Parser[SharedSecretOptions] = Parser.derive
  implicit lazy val help: Help[SharedSecretOptions]     = Help.derive
}
